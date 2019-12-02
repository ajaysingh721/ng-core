import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IncidentFormComponent } from "./incident-form/incident-form.component";

const components = [IncidentFormComponent];

@NgModule({
  imports: [CommonModule],
  declarations: components,
  exports: components
})
export class DynamicFormsModule {}
