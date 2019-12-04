import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormatJsonPipe } from "./pipes/format-json.pipe";
import { SharedMatModule } from "./shared-mat.module";
import { SharedComponentModule } from "./components/shared-component.module";
import { DynamicFormsModule } from "./forms/dynamic-forms.module";

@NgModule({
  declarations: [FormatJsonPipe],
  imports: [CommonModule, SharedComponentModule, SharedMatModule,],
  exports: [
    FormatJsonPipe,
    SharedMatModule,
    SharedComponentModule,
    DynamicFormsModule
  ]
})
export class SharedModule {}
