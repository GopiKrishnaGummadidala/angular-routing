import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../product";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = "Product Detail";
  product: Product;
  errorMessage: string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get("id");
      this.getProduct(id);
    });
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe({
      next: (product) => this.onProductRetrieved(product),
      error: (err) => (this.errorMessage = err),
    });
  }

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = "No product found";
    }
  }
}
