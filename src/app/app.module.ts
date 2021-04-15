import { UserModule } from "./user/user.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HttpClientModule } from "@angular/common/http";
import { ProductData } from "./products/product-data";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MessagesModule } from "./messages/messages.module";

@NgModule({
  declarations: [AppComponent, WelcomeComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(ProductData, { delay: 1000 }),
    UserModule,
    MessagesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
