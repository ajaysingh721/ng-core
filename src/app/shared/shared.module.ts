import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AdminLayoutComponent } from "./components/layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./components/layouts/auth-layout/auth-layout.component";
import { UserLayoutComponent } from "./components/layouts/user-layout/user-layout.component";

import { MatToolbarModule } from "@angular/material/toolbar";

const sharedComponents = [
  HeaderComponent,
  FooterComponent,
  PageNotFoundComponent,
  AdminLayoutComponent,
  AuthLayoutComponent,
  UserLayoutComponent
];

const matModules = [MatToolbarModule];

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: sharedComponents,
  exports: sharedComponents.concat(matModules)
})
export class SharedModule {}
