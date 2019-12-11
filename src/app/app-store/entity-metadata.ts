import { EntityMetadataMap } from "@ngrx/data";

const entityMetadata: EntityMetadataMap = {
  Customer: {}
};

// because the plural of "hero" is not "heros"
const pluralNames = { Customer: "Customers" };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
