import { EntityMetadataMap } from "ngrx-data";
import { Customer } from "../models/customer.model";

const entityMetadata: EntityMetadataMap = {
  Customer: Customer
};

// because the plural of "hero" is not "heros"
const pluralNames = { Customer: "Customers" };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
