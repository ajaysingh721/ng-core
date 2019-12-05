export class FormlyField {
  key: string;
  type: string;
  templateOptions: TemplateOptions;
}

export class TemplateOptions {
  label: string;
  placeholder: string;
  description: string;
  required: boolean;
  options: Options[];
}

export class Options {
  value: string;
  lable: string;
}
