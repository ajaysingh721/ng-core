import { Component, OnInit, Input, Inject } from "@angular/core";
import { ThemeService } from "./core/services/theme.service";
import { Observable } from "rxjs";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  themeName: string;

  constructor(
    private themeService: ThemeService,
    public translate: TranslateService
  ) {
    translate.addLangs(["en", "fr"]);
    if (localStorage.getItem("locale")) {
      const browserLang = localStorage.getItem("locale");
      translate.use(browserLang.match(/en|fr/) ? browserLang : "en");
    } else {
      localStorage.setItem("locale", "en");
      translate.setDefaultLang("en");
    }
  }

  ngOnInit() {
    this.themeService.theme$.subscribe(res => (this.themeName = res.theme));
  }
}
