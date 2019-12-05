import { Expose } from "class-transformer";
import { ExposedType } from "@nartc/automapper";

export class Item {
  @Expose()
  public ItemLabel: string;
  @Expose()
  public ItemValue: string;
}

export class Control {
  @Expose()
  public ControlName: string;
  @Expose()
  public ControlType: string;
  @Expose()
  public SubType: string;
  @Expose()
  public ControlLabel: string;
  @Expose()
  public Placeholder: string;
  @Expose()
  public IsRequired: boolean;
  @ExposedType(() => Item)
  public ListItems: Item[];
}
