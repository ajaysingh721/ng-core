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
  MatSelectModule,
  MatSidenavModule,
  MatBadgeModule,
  MatProgressSpinnerModule,
  MatDividerModule
} from "@angular/material";
import { MatListModule } from "@angular/material/list";

@NgModule({
  declarations: [],
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
    MatSelectModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatProgressSpinnerModule
  ]
})
export class SharedMatModule {}
