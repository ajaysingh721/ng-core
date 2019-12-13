import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatProgressBar, MatButton } from "@angular/material";
import { Router } from "@angular/router";
import { ThemeService } from "../../../core/services/theme.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"]
})
export class SignInComponent implements OnInit {
  // @ViewChild(MatProgressBar, { static: false }) progressBar: MatProgressBar;
  @ViewChild(MatButton, { static: false }) submitButton: MatButton;

  signinForm: FormGroup;
  user: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.signinForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      rememberMe: [false]
    });
    this.themeService.theme$.subscribe(res => {
      this.user = res.user;
    });
  }

  signin(): void {
    const signinData = this.signinForm.value;
    console.log(signinData);

    this.submitButton.disabled = true;
    // this.progressBar.mode = "indeterminate";

    this.router.navigate(["/customer/create"], {
      queryParams: { name: "Emon" },
      skipLocationChange: true
    });
  }
}
