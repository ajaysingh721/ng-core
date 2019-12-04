import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthLayoutComponent } from "./shared/components/layouts/auth-layout/auth-layout.component";
import { UserLayoutComponent } from "./shared/components/layouts/user-layout/user-layout.component";

import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "sessions/signin",
    pathMatch: "full"
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "sessions",
        loadChildren: () =>
          import("./views/sessions/sessions.module").then(
            m => m.SessionsModule
          ),
        data: { title: "Session" }
      }
    ]
  },
  {
    path: "customer",
    component: UserLayoutComponent,
    loadChildren: () =>
      import("./views/customer/customer.module").then(m => m.CustomerModule),
    data: { title: "Customer" }
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
