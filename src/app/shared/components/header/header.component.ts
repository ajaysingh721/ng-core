import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../../../core/services/theme.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  logo: string;
  currentLanguage = "en";
  availableLanguages = [
    {
      name: "English",
      code: "en"
    },
    {
      name: "French",
      code: "fr"
    }
  ];
  constructor(
    private themeService: ThemeService,
    public translate: TranslateService
  ) {}

  ngOnInit() {
    this.themeService.theme$.subscribe(res => {
      this.logo = res.logo;
    });
  }

  setLang() {
    this.translate.use(this.currentLanguage);
  }
}
