export class FormlyField {
  key: string;
  type: string;
  templateOptions: TemplateOption;
}

export class TemplateOption {
  label: string;
  placeholder: string;
  description: string;
  required: boolean;
  options: Option[];
}

export class Option {
  value: string;
  lable: string;
}
