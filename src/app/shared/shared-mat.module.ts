import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import {
  MatCardModule,
  MatInputModule,
  MatCheckboxModule,
  MatButtonModule,
  MatProgressBarModule,
  MatIconModule,
  MatMenuModule,
  MatToolbarModule,
  MatSelectModule
} from "@angular/material";
import { FormatJsonDataPipe } from "./pipes/format-json-data.pipe";

@NgModule({
  declarations: [FormatJsonDataPipe],
  imports: [CommonModule, FormsModule],
  exports: [
    MatCardModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressBarModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule
  ]
})
export class SharedMatModule {}
