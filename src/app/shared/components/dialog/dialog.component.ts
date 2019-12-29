import { DialogData } from "../../../models/dialog-data.model";
import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"]
})
export class DialogComponent implements OnInit {
  title: string;
  message: string;
  noButtonName: string;
  yesButtonName: string;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.title = data.title;
    this.message = data.body;
    this.noButtonName = data.noButtonName;
    this.yesButtonName = data.yesButtonName;
  }

  onNoClick(): void {
    // Close the dialog, return true
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    // Close the dialog, return true
    this.dialogRef.close(true);
  }

  ngOnInit() {}
}
