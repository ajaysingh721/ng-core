import { Pipe, PipeTransform } from "@angular/core";
import { FormlyField, Option } from "../../models/formlyfield.model";
import { Control, Item } from "../../models/control.model";
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
        "templateOptions.options",
        (opts: AutoMapperJs.IMemberConfigurationOptions) =>
          opts.mapFrom("ListItems")
      )
      .forMember(
        "templateOptions.options",
        (opts: AutoMapperJs.IMemberConfigurationOptions) =>
          opts.mapFrom("ListItems.ItemLabel")
      )
      .forMember(
        "templateOptions.options",
        (opts: AutoMapperJs.IMemberConfigurationOptions) =>
          opts.mapFrom("ListItems.ItemValue")
      );
    const result = automapper.map(Control, FormlyField, value);

    // automapper
    //   .createMap(Item, Option)
    //   // .forMember('fullName', (opts: AutoMapperJs.IMemberConfigurationOptions) => opts.mapFrom('name'))
    //   .forMember("label", (opts: AutoMapperJs.IMemberConfigurationOptions) =>
    //     opts.mapFrom("ItemLabel")
    //   )
    //   .forMember("vakue", (opts: AutoMapperJs.IMemberConfigurationOptions) =>
    //     opts.mapFrom("ItemValue")
    //   );

    // const resultNew = automapper.map(
    //   Item,
    //   Option,
    //   result.templateOptions.options
    // );

    // console.log(result.templateOptions);

    // result.templateOptions["options"] = resultNew;

    console.log(result);
    return result;
  }
}
