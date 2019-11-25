import { Component, OnInit } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { Customer } from "app/models/customer";
import { CustomerRemove } from "app/root-store/actions/customer.actions";

@Component({
  selector: "app-customer-view",
  templateUrl: "./customer-view.component.html",
  styleUrls: ["./customer-view.component.css"]
})
export class CustomerViewComponent implements OnInit {
  customers: Observable<Customer[]>;
  constructor(private store: Store<{ customers: Customer[] }>) {
    this.customers = store.pipe(select("customers"));
  }
  removeCustomer(customerIndex) {
    this.store.dispatch(new CustomerRemove(customerIndex));
  }

  ngOnInit() {}
}
