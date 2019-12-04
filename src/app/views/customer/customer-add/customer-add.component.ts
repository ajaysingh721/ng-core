import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { select, Store } from "@ngrx/store";
import { FormlyFieldConfig } from "@ngx-formly/core";

import { Customer } from "../../../models/customer.model";
import { CustomerAdd } from "../../../root-store/actions/customer.actions";
import { APIService } from "../../../core/services/api.service";
import { FormatJsonPipe } from "../../../shared/pipes/format-json.pipe";

@Component({
  selector: "app-customer-add",
  templateUrl: "./customer-add.component.html",
  styleUrls: ["./customer-add.component.scss"]
})
export class CustomerAddComponent implements OnInit {
  customers: Observable<Customer[]>;
  formFields: FormlyFieldConfig[];
  formModels: { email: ""; password: "" };

  constructor(
    private store: Store<{ customers: Customer[] }>,
    private apiService: APIService<FormlyFieldConfig>,
    private formatter: FormatJsonPipe
  ) {
    this.customers = store.pipe(select("customers"));
  }

  onSubmit(formData: any) {
    console.log(formData);
  }

  ngOnInit() {
    this.apiService.endpoint = "api/forms";
    this.apiService.getAll().subscribe(res => {
      this.formFields = this.formatter.transform(res);
    });
  }
}
