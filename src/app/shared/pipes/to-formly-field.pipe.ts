import { Pipe, PipeTransform } from "@angular/core";
import { FormlyField } from "../../models/formly-field.model";
import { Control } from "../../models/control.model";
import "automapper-ts";

@Pipe({
  name: "toFormlyField"
})
export class ToFormlyFieldPipe implements PipeTransform {
  transform(value: Control, args?: any): any {
    automapper
      .createMap(Control, FormlyField)
      .forMember("key", (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.mapFrom("ControlName");
      })
      .forMember("type", (opts: AutoMapperJs.IMemberConfigurationOptions) => {
        opts.mapFrom("ControlType");
      })
      .forMember(
        "templateOptions.placeholder",
        (opts: AutoMapperJs.IMemberConfigurationOptions) => {
          opts.mapFrom("Placeholder");
        }
      )
      .forMember(
        "templateOptions.type",
        (opts: AutoMapperJs.IMemberConfigurationOptions) => {
          opts.mapFrom("SubType");
        }
      )
      .forMember(
        "templateOptions.required",
        (opts: AutoMapperJs.IMemberConfigurationOptions) => {
          opts.mapFrom("IsRequired");
        }
      )
      .forMember(
        "templateOptions.label",
        (opts: AutoMapperJs.IMemberConfigurationOptions) => {
          opts.mapFrom("ControlLabel");
        }
      )
      .forSourceMember(
        "templateOptions.options",
        (opts: AutoMapperJs.IMemberConfigurationOptions) => {
          opts.mapFrom("ListItems");
        }
      );

    var result = automapper.map(Control, FormlyField, value);
    return result;
  }
}
