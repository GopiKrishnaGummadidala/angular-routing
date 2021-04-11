import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { RouterModule, Routes } from "@angular/router";
import { ProductResolver } from "./product-resolver.service";
import { ProductTagComponent } from "./product-edit/product-tag/product-tag.component";
import { ProductInfoComponent } from "./product-edit/product-info/product-info.component";

const routes: Routes = [
  {
    path: "products",
    children: [
      {
        path: "",
        component: ProductListComponent,
      },
      {
        path: ":id",
        component: ProductDetailsComponent,
        resolve: { resolvedData: ProductResolver },
      },
      {
        path: ":id/edit",
        component: ProductEditComponent,
        resolve: { resolvedData: ProductResolver },
        children: [
          {
            path: "",
            redirectTo: "info",
            pathMatch: "full",
          },
          {
            path: "info",
            component: ProductInfoComponent,
          },
          {
            path: "tags",
            component: ProductTagComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductEditComponent,
    ProductTagComponent,
    ProductInfoComponent,
  ],
})
export class ProductModule {}
