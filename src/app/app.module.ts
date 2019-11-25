import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { LoginModule } from "./views/login/login.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, LoginModule],
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
