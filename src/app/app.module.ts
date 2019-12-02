import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SessionsModule } from "./views/sessions/sessions.module";
import { AppRoutingModule } from "./app-routing.module";
import { SharedComponentModule } from "./shared/components/shared-component.module";
import { RootStoreModule } from "./root-store/root-store.module";
import { CustomerModule } from "./views/customer/customer.module";
import { CoreModule } from "./core/core.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SessionsModule,
    SharedComponentModule,
    CustomerModule,
    RootStoreModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    TranslateModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports:[TranslateModule]
})
export class AppModule {}
