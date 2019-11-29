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
      { path: "regisrer", component: SignOutComponent },
      { path: "reset-password", component: SignOutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SessionsRoutingModule {}
