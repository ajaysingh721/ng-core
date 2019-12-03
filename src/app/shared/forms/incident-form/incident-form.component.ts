import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

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
  fields: FormlyFieldConfig[] = [
    {
      key: "email",
      type: "input",
      templateOptions: {
        type: "email",
        label: "Email address",
        placeholder: "Enter email",
        required: true
      }
    },
    {
      key: "select",
      type: "radio",
      templateOptions: {
        label: "Select",
        placeholder: "Placeholder",
        description: "Description",
        required: true,
        options: [
          { value: 1, label: "Option 3" },
          { value: 2, label: "Option 2" },
          { value: 3, label: "Option 3" },
          { value: 4, label: "Option 4" }
        ]
      }
    },
    {
      key: "password",
      type: "input",
      templateOptions: {
        label: "Enter txt",
        type: "password",
        required: true,
        pattern: /^[1-9]/,
        blur: function() {
          // alert();
        }
      },
      hideExpression: "!model.email"
    }
  ];

  submit(model) {
    alert(JSON.stringify(model));
  }

  constructor() {}

  ngOnInit() {
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
