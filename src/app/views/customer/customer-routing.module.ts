import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../../core/guards/auth.guard";

import { CustomerOverviewComponent } from "./customer-overview/customer-overview.component";
const routers: Routes = [
  {
    path: "",
    children: [
      {
        path: "overview",
        component: CustomerOverviewComponent
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
