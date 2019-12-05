import { Pipe, PipeTransform } from "@angular/core";
import { FormlyField } from "../../models/formly-field.model";
import { Control } from "../../models/control.model";
import { Mapper, ExposedType } from "@nartc/automapper";
import "reflect-metadata";

@Pipe({
  name: "toFormlyField"
})
export class ToFormlyFieldPipe implements PipeTransform {
  transform(value: Control, args?: any): any {
    Mapper.initialize(config => {
      config.createMap(Control, FormlyField); // create a mapping from Control to FormlyField (one direction)
      config
        .createMap(Control, FormlyField)
        .forMember(
          destination => destination.templateOptions.options,
          opts => opts.mapFrom(s => s.ListItems)
        );
    });

    const result = Mapper.map(value, FormlyField);
    console.log(result);
    return result;
  }
}
