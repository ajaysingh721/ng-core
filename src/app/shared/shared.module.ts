import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToFormlyFieldPipe } from "./pipes/to-formly-field.pipe";
import { SharedMatModule } from "./shared-mat.module";
import { SharedComponentModule } from "./components/shared-component.module";
import { DynamicFormsModule } from "./forms/dynamic-forms.module";

@NgModule({
  declarations: [ToFormlyFieldPipe],
  imports: [
    CommonModule,
    SharedComponentModule,
    SharedMatModule,
    DynamicFormsModule
  ],
  exports: [SharedMatModule, SharedComponentModule, DynamicFormsModule],
  providers: [ToFormlyFieldPipe]
})
export class SharedModule {}
