import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../../../core/services/theme.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  logo: string;
  availableLanguages = [
    {
      name: "EN",
      code: "en",
      flag: "flag-icon-us"
    },
    {
      name: "FR",
      code: "fr",
      flag: "flag-icon-fr"
    }
  ];

  currentLanguage = this.availableLanguages[0];

  constructor(
    private themeService: ThemeService,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.themeService.theme$.subscribe(res => {
      this.logo = res.logo;
    });
  }

  setLang(lang: any) {
    this.currentLanguage = lang;
    this.translate.use(lang.code);
  }
}
