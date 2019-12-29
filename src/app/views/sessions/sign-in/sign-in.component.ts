import { DialogData } from "./../../../models/dialog-data.model";
import { Keepalive } from "@ng-idle/keepalive";
import { Idle, DEFAULT_INTERRUPTSOURCES } from "@ng-idle/core";
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatButton, MatDialog } from "@angular/material";
import { MatDialogRef } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ThemeService } from "../../../core/services/theme.service";
import { SessionService } from "src/app/core/services/session.service";
import { DialogComponent } from "src/app/shared/components/dialog/dialog.component";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html"
})
export class SignInComponent implements OnInit {
  // @ViewChild(MatProgressBar, { static: false }) progressBar: MatProgressBar;
  @ViewChild(MatButton, { static: false }) submitButton: MatButton;

  signinForm: FormGroup;
  user: string;
  idleState = "Not started.";
  timedOut = false;
  lastPing?: Date = null;
  result: string = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private themeService: ThemeService,
    private sessionService: SessionService,
    private dialog: MatDialog,
    private idle: Idle,
    private keepalive: Keepalive // private dialogRef: MatDialogRef<DialogComponent>
  ) {
    this.idle.setIdle(5);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    this.idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    this.idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    this.idle.onIdleEnd.subscribe(() => {
      this.idleState = "No longer idle.";
      console.log(this.idleState);
      this.reset();
    });

    this.idle.onTimeout.subscribe(() => {
      //this.dialogRef.close();
      this.idleState = "Timed out!";
      this.timedOut = true;
      console.log(this.idleState);
      this.router.navigate(["/"]);
    });

    this.idle.onIdleStart.subscribe(() => {
      this.idleState = "You've gone idle!";
      console.log(this.idleState);
      this.confirmDialog();
    });
    this.idle.onTimeoutWarning.subscribe(countdown => {
      this.idleState = "You will time out in " + countdown + " seconds!";
      console.log(this.idleState);
    });
    // sets the ping interval to 15 seconds
    this.keepalive.interval(15);

    this.keepalive.onPing.subscribe(() => (this.lastPing = new Date()));

    this.sessionService.getUserLoggedIn().subscribe(userLoggedIn => {
      if (userLoggedIn) {
        this.idle.watch();
        this.timedOut = false;
      } else {
        this.idle.stop();
      }
    });
  }

  ngOnInit() {
    this.signinForm = this.fb.group({
      username: ["703254673", Validators.required],
      password: ["", Validators.required],
      rememberMe: [false]
    });
    this.themeService.theme$.subscribe(res => {
      this.user = res.user;
    });
  }

  reset() {
    this.idle.watch();
    //xthis.idleState = 'Started.';
    this.timedOut = false;
  }

  hidedialogRef(): void {
    //this.dialogRef.close();
  }

  stay() {
    //this.dialogRef.close();
    this.reset();
  }

  logout() {
    //this.dialogRef.close();
    this.sessionService.setUserLoggedIn(false);
    this.router.navigate(["/"]);
  }

  signin(): void {
    const signinData = this.signinForm.value;
    console.log(signinData);

    this.submitButton.disabled = true;
    this.sessionService.setUserLoggedIn(true);
    // this.progressBar.mode = "indeterminate";

    this.router.navigate(["/customer/create"], {
      queryParams: { name: "Emon" },
      skipLocationChange: true
    });
  }

  confirmDialog(): void {
    const dialogData: DialogData = {
      body: this.idleState,
      title: "Session timeout warning !",
      noButtonName: "Stay alive",
      yesButtonName: "Skip now"
    };

    const dialogRef = this.dialog.open(DialogComponent, {
      width: "50%",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {});
  }
}
