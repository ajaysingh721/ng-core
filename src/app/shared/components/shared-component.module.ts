import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FlexLayoutModule } from "@angular/flex-layout";

import { HeaderTopComponent } from "./header-top/header-top.component";
import { FooterComponent } from "./footer/footer.component";
import { TileComponent } from "./tile/tile.component";
import { MenuItemComponent } from "./menu-item/menu-item.component";
import { SharedMatModule } from "../shared-mat.module";

import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";
import { UserLayoutComponent } from "./layouts/user-layout/user-layout.component";
import { SidenavSideComponent } from "./sidenav-side/sidenav-side.component";
import { MenuListItemComponent } from "./menu-list-item/menu-list-item.component";
import { HeaderComponent } from "./header/header.component";
import { LoaderComponent } from "./loader/loader.component";

const sharedComponents = [
  HeaderTopComponent,
  FooterComponent,
  PageNotFoundComponent,
  AdminLayoutComponent,
  AuthLayoutComponent,
  UserLayoutComponent,
  TileComponent,
  MenuItemComponent,
  SidenavSideComponent,
  HeaderComponent,
  MenuListItemComponent,
  LoaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedMatModule,
    FormsModule
  ],
  declarations: sharedComponents,
  exports: sharedComponents
})
export class SharedComponentModule {}
