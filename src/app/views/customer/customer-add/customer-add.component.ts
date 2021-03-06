import { Control } from "./../../../models/control.model";
import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  Renderer2
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { FormlyFieldConfig } from "@ngx-formly/core";

import { Customer } from "../../../models/customer.model";
import { APIService } from "../../../core/services/api.service";
import { ToFormlyFieldPipe } from "../../../shared/pipes/to-formly-field.pipe";

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
    private apiService: APIService<Control>,
    private toFormlyField: ToFormlyFieldPipe,
    private activeRoute: ActivatedRoute
  ) {
    //this.customers = store.pipe(select("customers"));
  }

  onSubmit(formData: any) {
    console.log(formData);
  }

  ngOnInit() {
    this.apiService.endpoint = "api/forms";
    this.apiService.getAll().subscribe(res => {
      this.formFields = this.toFormlyField.transform(res);
    });

    this.activeRoute.queryParams.subscribe(params => {
      console.log(params["name"]);
    });
  }
}
