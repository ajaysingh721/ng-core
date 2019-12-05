import { Pipe, PipeTransform } from "@angular/core";
import { FormlyField } from "../../models/formlyfield.model";
import { Control } from "../../models/control.model";
import "automapper-ts";

@Pipe({
  name: "toFormlyField"
})
export class ToFormlyFieldPipe implements PipeTransform {
  transform(value: Control, args?: any): any {
    // mapping configuration
    automapper
      .createMap(Control, FormlyField)
      // .forMember('fullName', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('name'))
      .forMember("key", (opts: AutoMapperJs.IMemberConfigurationOptions) =>
        opts.mapFrom("ControlName")
      )
      .forMember("type", (opts: AutoMapperJs.IMemberConfigurationOptions) =>
        opts.mapFrom("ControlType")
      )
      .forMember(
        "templateOptions.placeholder",
        (opts: AutoMapperJs.IMemberConfigurationOptions) =>
          opts.mapFrom("Placeholder")
      )
      .forMember(
        "templateOptions.label",
        (opts: AutoMapperJs.IMemberConfigurationOptions) =>
          opts.mapFrom("ControlLabel")
      )
      .forMember(
        "templateOptions.options.label",
        (opts: AutoMapperJs.IMemberConfigurationOptions) =>
          opts.mapFrom("ListItems.ItemName")
      )
      .forMember(
        "templateOptions.options.value",
        (opts: AutoMapperJs.IMemberConfigurationOptions) =>
          opts.mapFrom("ListItems.ItemV")
      );
    const result = automapper.map(Control, FormlyField, value);
    console.log(result);
    return result;
  }
}
