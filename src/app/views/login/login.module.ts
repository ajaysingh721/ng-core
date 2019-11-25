import { NgModule } from "@angular/core";

import { SignInComponent } from "./sign-in/sign-in.component";
import { SignOutComponent } from "./sign-out/sign-out.component";
import { LoginRoutingModule } from "./login-routing.module";

@NgModule({
  declarations: [SignInComponent, SignOutComponent],
  imports: [LoginRoutingModule]
})
export class LoginModule {}
