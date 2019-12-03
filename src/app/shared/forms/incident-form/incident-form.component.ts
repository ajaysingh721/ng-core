import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";
import { APIService } from "../../../core/services/api.service";

@Component({
  selector: "app-incident-form",
  templateUrl: "./incident-form.component.html",
  styleUrls: ["./incident-form.component.scss"]
})
export class IncidentFormComponent implements OnInit {
  form = new FormGroup({});
  model = {
    email: "email@gmail.com",
    select: "",
    password: "",
    rememberMe: ""
  };
  fields: FormlyFieldConfig[] = [];

  submit(model) {
    alert(JSON.stringify(model));
  }

  constructor(private apiService: APIService) {}

  ngOnInit() {
    this.apiService.endpoint = "api/forms";
    this.apiService.getAll().subscribe(res => {
      this.fields = res;
    });

    var tt = [
      {
        key: "password",
        type: "select",
        label: "Enter txt",
        required: true,
        minLegth: 2,
        options: ["option1", "option2", "option2"]
      }
    ];
  }
}
