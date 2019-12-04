import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from "./inmemory-db.service";

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      passThruUnknownUrl: true,
      dataEncapsulation:false
    })
  ]
})
export class InMemoryDataModule {}
