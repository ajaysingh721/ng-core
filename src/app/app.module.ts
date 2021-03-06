import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { SessionsModule } from "./views/sessions/sessions.module";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";
import { CustomerModule } from "./views/customer/customer.module";
import { CoreModule } from "./core/core.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { InMemoryDataModule } from "./shared/inmemory-db/inmemory-db.module";
import { NgIdleKeepaliveModule } from "@ng-idle/keepalive";
import { DialogComponent } from "./shared/components/dialog/dialog.component";
import { MatDialogRef, MAT_DIALOG_DEFAULT_OPTIONS } from "@angular/material";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SessionsModule,
    SharedModule,
    CustomerModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    HttpClientModule,
    InMemoryDataModule,
    NgIdleKeepaliveModule.forRoot()
  ],

  providers: [],
  declarations: [AppComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
