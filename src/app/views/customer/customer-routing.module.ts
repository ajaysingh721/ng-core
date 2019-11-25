import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CostomerViewComponent } from "./customer-view/customer-view.component";

const routers: Routes = [
  {
    path: "",
    children: [
      {
        path: "/customer-view",
        component: CostomerViewComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routers)],
  exports: [RouterModule]
})
export class CoustomerRoutingModule {}
