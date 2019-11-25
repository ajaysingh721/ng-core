import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./views/login/login.module").then(m => m.LoginModule)
  },
  {
    path: "",
    loadChildren: () =>
      import("./views/customer/customer.module").then(m => m.CustomerModule)
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
