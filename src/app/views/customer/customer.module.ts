import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerAddComponent } from "./customer-add/customer-add.component";
import { CoustomerRoutingModule } from "./customer-routing.module";
import { CustomerOverviewComponent } from "./customer-overview/customer-overview.component";

import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [CommonModule, CoustomerRoutingModule, SharedModule],
  declarations: [
    CustomerListComponent,
    CustomerAddComponent,
    CustomerOverviewComponent
  ]
})
export class CustomerModule {}
