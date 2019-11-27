import { NgModule } from "@angular/core";
import {
  MatToolbarModule,
  MatIconModule,
  MatSlideToggleModule
} from "@angular/material";

const matModules = [MatToolbarModule, MatIconModule, MatSlideToggleModule];

@NgModule({
  imports: matModules,
  exports: matModules
})
export class SharedMatModule {}
