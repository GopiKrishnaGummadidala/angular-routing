import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./user/auth.guard";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  { path: "welcome", component: WelcomeComponent },
  {
    path: "products",
    canLoad: [AuthGuard],
    data: { preload: false },
    loadChildren: () =>
      import("./products/product.module").then((m) => m.ProductModule),
  },
  { path: "", redirectTo: "welcome", pathMatch: "full" },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
