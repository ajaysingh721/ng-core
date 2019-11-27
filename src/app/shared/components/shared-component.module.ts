import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { UserLayoutComponent } from "./layouts/user-layout/user-layout.component";

const sharedComponents = [
  HeaderComponent,
  FooterComponent,
  PageNotFoundComponent,
  AdminLayoutComponent,
  AuthLayoutComponent,
  UserLayoutComponent
];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: sharedComponents,
  exports: sharedComponents
})
export class SharedComponentModule {}
