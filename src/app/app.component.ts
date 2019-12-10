import { Component, OnInit, Input, Inject } from "@angular/core";
import { ThemeService } from "./core/services/theme.service";
import { T } from "./models/theme.model";
import { Observable } from "rxjs";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  theme$: Observable<Theme>;
  constructor(
    private themeService: ThemeService,
    public translate: TranslateService
  ) {
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang("en");
    translate.use("en");
    this.theme$ = this.themeService.theme$;
  }
}
