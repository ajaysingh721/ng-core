import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SignInComponent } from "./sign-in/sign-in.component";
import { SignOutComponent } from "./sign-out/sign-out.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { RegisterComponent } from "./register/register.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "signin",
        component: SignInComponent
      },
      { path: "signout", component: SignOutComponent },
      { path: "signup", component: RegisterComponent },
      { path: "reset-password", component: ResetPasswordComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule {}
