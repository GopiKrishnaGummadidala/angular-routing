import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { RouterModule, Routes } from "@angular/router";
import { ProductResolver } from "./product-resolver.service";

const routes: Routes = [
  { path: "products", component: ProductListComponent },
  {
    path: "products/:id",
    component: ProductDetailsComponent,
    resolve: { resolvedData: ProductResolver },
  },
  {
    path: "products/:id/edit",
    component: ProductEditComponent,
    resolve: { resolvedData: ProductResolver },
    // children: [
    //   {
    //     path: "",
    //     redirectTo: "info",
    //     pathMatch: "full",
    //   },
    //   {
    //     // path: "info",
    //     // component: ProductEditInfoComponent,
    //   },
    //   {
    //     // path: "tags",
    //     // component: ProductEditTagsComponent,
    //   },
    // ],
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductEditComponent,
  ],
})
export class ProductModule {}
