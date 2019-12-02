import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IncidentFormComponent } from "./incident-form/incident-form.component";
import { FormlyModule } from "@ngx-formly/core";
import { FormlyMaterialModule } from "@ngx-formly/material";

const components = [IncidentFormComponent];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule],
  declarations: components,
  exports: components
})
export class DynamicFormsModule {}
