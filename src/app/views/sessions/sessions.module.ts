import { NgModule } from "@angular/core";

import { SignInComponent } from "./sign-in/sign-in.component";
import { SignOutComponent } from "./sign-out/sign-out.component";
import { SessionsRoutingModule } from "./sessions-routing.module";

@NgModule({
  declarations: [SignInComponent, SignOutComponent],
  imports: [SessionsRoutingModule]
})
export class SessionsModule {}
