import { NgModule } from "@angular/core";
import { MatToolbarModule, MatIconModule } from "@angular/material";

const matModules = [MatToolbarModule, MatIconModule];

@NgModule({
  imports: matModules,
  exports: matModules
})
export class SharedMatModule {}
