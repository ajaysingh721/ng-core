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
  MatDialogModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS
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
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ]
})
export class SharedMatModule {}
