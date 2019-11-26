import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginModule } from "./views/login/login.module";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { RootStoreModule } from "./root-store/root-store.module";
import { CustomerModule } from "./views/customer/customer.module";
import { CoreModule } from "./core/core.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    LoginModule,
    CustomerModule,
    SharedModule,
    RootStoreModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
