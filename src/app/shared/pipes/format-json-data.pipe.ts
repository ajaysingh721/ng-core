import { Pipe, PipeTransform } from "@angular/core";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Pipe({
  name: "formData"
})
export class FormatJsonDataPipe implements PipeTransform {
  jsondata: FormlyFieldConfig[];
  transform(value: any, args?: any): any {
    let result = [
      {
        key: "email",
        type: "input",
        templateOptions: {
          type: "email",
          label: "Email address",
          placeholder: "Enter email",
          required: true
        }
      }
    ];
    return ;
  }
}
