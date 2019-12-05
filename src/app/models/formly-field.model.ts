import { Expose } from "class-transformer";
import { ExposedType } from "@nartc/automapper";

export class FormlyField {
  @Expose()
  key: string;
  @Expose()
  type: string;
  @ExposedType(() => TemplateOption)
  templateOptions: TemplateOption;
}

export class TemplateOption {
  @Expose()
  label: string;
  @Expose()
  placeholder: string;
  @Expose()
  description: string;
  @Expose()
  required: boolean;
  @ExposedType(() => Option)
  options: Option[];
}

export class Option {
  @Expose()
  value: string;
  @Expose()
  lable: string;
}
