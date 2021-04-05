import { ProductModule } from "./products/product.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { LoginComponent } from "./login/login.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductData } from "./products/product-data";

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    ProductModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
