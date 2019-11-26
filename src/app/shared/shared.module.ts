import { NgModule } from "@angular/core";

import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { AdminLayoutComponent } from "./components/layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./components/layouts/auth-layout/auth-layout.component";

const sharedComponents = [
  HeaderComponent,
  FooterComponent,
  PageNotFoundComponent,
  AdminLayoutComponent,
  AuthLayoutComponent
];

@NgModule({
  declarations: sharedComponents,
  exports: sharedComponents
})
export class SharedModule {}
