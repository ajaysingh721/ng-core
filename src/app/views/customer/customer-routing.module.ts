import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../../core/guards/auth.guard";

import { CustomerOverviewComponent } from "./customer-overview/customer-overview.component";
import { CustomerAddComponent } from "./customer-add/customer-add.component";
const routers: Routes = [
  {
    path: "",
    children: [
      {
        path: "overview",
        component: CustomerOverviewComponent
      },
      {
        path: "create",
        component: CustomerAddComponent
      }
    ],
    canActivateChild: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class CoustomerRoutingModule {}
