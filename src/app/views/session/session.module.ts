import { NgModule } from "@angular/core";

import { SignInComponent } from "./sign-in/sign-in.component";
import { SignOutComponent } from "./sign-out/sign-out.component";

@NgModule({
  declarations: [SignInComponent, SignOutComponent]
})
export class LoginModule {}
