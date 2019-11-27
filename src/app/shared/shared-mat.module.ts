import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";

const matModules = [MatToolbarModule];

@NgModule({
  exports: [MatToolbarModule]
})
export class SharedMatModule {}
