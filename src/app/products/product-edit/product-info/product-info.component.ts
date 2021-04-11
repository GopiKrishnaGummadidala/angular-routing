import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../../product";

@Component({
  selector: "app-product-info",
  templateUrl: "./product-info.component.html",
  styleUrls: ["./product-info.component.scss"],
})
export class ProductInfoComponent implements OnInit {
  @ViewChild(NgForm, { static: false }) productForm: NgForm;

  errorMessage: string;
  product: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.parent.data.subscribe((data) => {
      if (this.productForm) {
        this.productForm.reset();
      }

      this.product = data["resolvedData"].product;
    });
  }
}
