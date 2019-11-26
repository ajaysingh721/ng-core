import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CustomerOverviewComponent } from "./customer-overview/customer-overview.component";
const routers: Routes = [
  {
    path: "",
    children: [
      {
        path: "overview",
        component: CustomerOverviewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class CoustomerRoutingModule {}
