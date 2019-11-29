import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SignInComponent } from "./sign-in/sign-in.component";
import { SignOutComponent } from "./sign-out/sign-out.component";
import { SessionsRoutingModule } from "./sessions-routing.module";
import { SharedMatModule } from "../../shared/shared-mat.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { RegisterComponent } from "./register/register.component";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    SignInComponent,
    SignOutComponent,
    ResetPasswordComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    SharedMatModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ]
})
export class SessionsModule {}
