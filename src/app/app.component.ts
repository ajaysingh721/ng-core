import { Component, OnInit, Input, Inject } from "@angular/core";
import { ThemeService } from "./core/services/theme.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  themeName: Observable<string>;

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeName = this.themeService.theme$;
  }
}
