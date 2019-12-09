export class Item {
  ItemLabel: string;
  ItemValue: string;
}

export class Control {
  ControlName: string;
  ControlType: string;
  SubType: string;
  ControlLabel: string;
  Placeholder: string;
  IsRequired: boolean;
  ListItems: Item[];
}
