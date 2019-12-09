import { Customer } from "./../../models/customer.model";
import { Injectable } from "@angular/core";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";

@Injectable({ providedIn: "root" })
export class CustomerService extends EntityCollectionServiceBase<Customer> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super("Customer", serviceElementsFactory);
  }
}
