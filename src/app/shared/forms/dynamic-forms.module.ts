import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IncidentFormComponent } from "./incident-form/incident-form.component";

const components = [IncidentFormComponent];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: components,
  exports: components
})
export class DynamicFormsModule {}
