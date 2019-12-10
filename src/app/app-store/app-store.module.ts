import { environment } from "./../../environments/environment";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { DefaultDataServiceConfig, EntityDataModule } from "@ngrx/data";
import { entityConfig } from "./entity-metadata";

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig)
  ]
})
export class AppStoreModule {}
