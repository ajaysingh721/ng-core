import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { FormlyFieldConfig } from "@ngx-formly/core";

import { Customer } from "../../../models/customer.model";
import { CustomerAdd } from "../../../root-store/actions/customer.actions";
import { APIService } from "../../../core/services/api.service";

@Component({
  selector: "app-customer-add",
  templateUrl: "./customer-add.component.html",
  styleUrls: ["./customer-add.component.scss"]
})
export class CustomerAddComponent implements OnInit {
  customers: Observable<Customer[]>;
  formFields: FormlyFieldConfig[];

  constructor(
    private store: Store<{ customers: Customer[] }>,
    private apiService: APIService<FormlyFieldConfig>
  ) {
    this.customers = store.pipe(select("customers"));
  }

  AddCustomer(customerName: string) {
    const customer = new Customer();
    customer.name = customerName;
    this.store.dispatch(new CustomerAdd(customer));
  }

  ngOnInit() {
    this.apiService.endpoint = "api/forms";
    this.apiService.getAll().subscribe(res => {
      debugger;
      this.formFields = res;
    });
  }
}
