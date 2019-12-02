import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerListComponent } from "./customer-list/customer-list.component";
import { CustomerAddComponent } from "./customer-add/customer-add.component";
import { CoustomerRoutingModule } from "./customer-routing.module";
import { CustomerOverviewComponent } from "./customer-overview/customer-overview.component";

import { DynamicFormsModule } from "../../shared/forms/dynamic-forms.module";

@NgModule({
  imports: [CommonModule, CoustomerRoutingModule, DynamicFormsModule],
  declarations: [
    CustomerListComponent,
    CustomerAddComponent,
    CustomerOverviewComponent
  ]
})
export class CustomerModule {}
