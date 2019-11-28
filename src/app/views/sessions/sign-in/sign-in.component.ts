import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatProgressBar, MatButton } from "@angular/material";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  @ViewChild(MatProgressBar, { static: false }) progressBar: MatProgressBar;
  @ViewChild(MatButton, { static: false }) submitButton: MatButton;

  signinForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.signinForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      rememberMe: [false]
    });
  }

  signin(): void {
    const signinData = this.signinForm.value;
    console.log(signinData);

    this.submitButton.disabled = true;
    this.progressBar.mode = "indeterminate";

    //this.router.navigate(["dashboard"]);
  }
}
