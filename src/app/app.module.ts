import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { SessionsModule } from "./views/sessions/sessions.module";
import { AppRoutingModule } from "./app-routing.module";
import { SharedComponentModule } from "./shared/components/shared-component.module";
import { RootStoreModule } from "./root-store/root-store.module";
import { CustomerModule } from "./views/customer/customer.module";
import { CoreModule } from "./core/core.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    SessionsModule,
    SharedComponentModule,
    CustomerModule,
    RootStoreModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
