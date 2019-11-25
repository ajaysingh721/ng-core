import { NgModule } from "@angular/core";

import { StoreModule } from "@ngrx/store";
import { CustomerReducer } from "./reducers/customer.reducer";
@NgModule({
  imports: [StoreModule.forRoot({ customers: CustomerReducer })]
})
export class RootStoreModule {}
