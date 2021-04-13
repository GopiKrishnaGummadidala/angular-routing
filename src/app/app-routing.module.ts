import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProductListComponent } from "./products/product-list/product-list.component";
import { AuthGuard } from "./user/auth.guard";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  {
    path: "products",
    component: ProductListComponent,
  },
  { path: "welcome", component: WelcomeComponent },
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
