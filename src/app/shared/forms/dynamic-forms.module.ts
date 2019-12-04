import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormlyFormComponent } from "./formly-form/formly-form.component";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";
import { SharedMatModule } from "../shared-mat.module";

const components = [FormlyFormComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    SharedMatModule
  ],
  declarations: components,
  exports: components
})
export class DynamicFormsModule {}
