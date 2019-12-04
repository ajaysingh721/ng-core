import { FormlyFieldConfig } from "@ngx-formly/core";

export class FormDb {
  constructor() {}
  public forms: FormlyFieldConfig[] = [
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
}
