import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomerViewComponent } from "./customer-view/customer-view.component";
import { CustomerAddComponent } from "./customer-add/customer-add.component";
import { CoustomerRoutingModule } from "./customer-routing.module";
import { CustomerOverviewComponent } from './customer-overview/customer-overview.component';

@NgModule({
  imports: [CommonModule, CoustomerRoutingModule],
  declarations: [CustomerViewComponent, CustomerAddComponent, CustomerOverviewComponent]
})
export class CustomerModule {}
