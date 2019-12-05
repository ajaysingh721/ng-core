export class Item {
  public ItemLabel: string;
  public ItemValue: string;
}

export class Control {
  public ControlName: string;
  public ControlType: string;
  public SubType: string;
  public ControlLabel: string;
  public Placeholder: string;
  public IsRequired: boolean;
  public ListItems: Item[];
}
