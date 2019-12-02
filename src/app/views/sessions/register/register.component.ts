import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatProgressBar, MatButton } from "@angular/material";
import { Router } from "@angular/router";
import { ThemeService } from "../../../core/services/theme.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    this.signuForm = this.fb.group({
      username: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required]
    });
  }
}
