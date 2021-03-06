import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SelectiveStrategy } from "./selective-strategy.service";
import { AuthGuard } from "./user/auth.guard";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  {
    path: "products",
    canActivate: [AuthGuard],
    data: { preload: false },
    loadChildren: () =>
      import("./products/product.module").then((m) => m.ProductModule),
  },
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: SelectiveStrategy }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
