import { FormlyFieldConfig } from "@ngx-formly/core";

export class FormDb {
  public static forms = [
    {
      ControlName: "name",
      ControlType: "input",
      SubType: "text",
      ControlLabel: "Full Name",
      Placeholder: "Enter full name",
      IsRequired: true,
      ListItems: []
    },
    {
      ControlName: "email",
      ControlType: "input",
      SubType: "email",
      ControlLabel: "Email Address",
      Placeholder: "Enter email address",
      IsRequired: true,
      ListItems: []
    },
    {
      ControlName: "dept",
      ControlType: "select",
      SubType: "select",
      ControlLabel: "Please Select",
      Placeholder: "Please select",
      IsRequired: true,
      ListItems: [
        { value1: 1, label1: "IT" },
        { value1: 2, label1: "HR" },
        { value1: 3, label1: "Account" },
        { value1: 4, label1: "Security" }
      ]
    }
  ];

  public static forms1: FormlyFieldConfig[] = [
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
