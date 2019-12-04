import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormatJsonDataPipe } from "./pipes/format-json-data.pipe";
import { SharedMatModule } from "./shared-mat.module";
import { SharedComponentModule } from "./components/shared-component.module";

@NgModule({
  declarations: [FormatJsonDataPipe],
  imports: [CommonModule],
  exports: [FormatJsonDataPipe, SharedMatModule, SharedComponentModule]
})
export class SharedModule {}
