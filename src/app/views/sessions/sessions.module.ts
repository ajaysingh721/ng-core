import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignInComponent } from "./sign-in/sign-in.component";
import { SignOutComponent } from "./sign-out/sign-out.component";
import { SessionsRoutingModule } from "./sessions-routing.module";
import { SharedMatModule } from "../../shared/shared-mat.module";

@NgModule({
  declarations: [SignInComponent, SignOutComponent],
  imports: [CommonModule, SessionsRoutingModule, SharedMatModule]
})
export class SessionsModule {}
