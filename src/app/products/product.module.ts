import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ProductListComponent } from "./product-list/product-list.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [ProductListComponent],
})
export class ProductModule {}
