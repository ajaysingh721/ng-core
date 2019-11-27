import { Component, OnInit, Input, Inject } from "@angular/core";
import { ThemeService } from "./core/services/theme.service";
import { Observable } from "rxjs";

import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  isDarkTheme: Observable<boolean>;

  constructor(
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
    console.log(this.document.location.origin);
  }
}
