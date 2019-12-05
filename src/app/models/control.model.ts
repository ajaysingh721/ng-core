export class Items {
  public ItemName: string;
  public ItemValue: string;
}

export class Control {
  public ControlName: string;
  public ControlType: string;
  public SubType: string;
  public ControlLabel: string;
  public Placeholder: string;
  public IsRequired: boolean;
  public ListItems: Items[];
}
