import { Injectable, Inject } from "@angular/core";
import { Subject } from "rxjs";
import { DOCUMENT } from "@angular/common";

@Injectable()
export class ThemeService {
  private _theme: Subject<string> = new Subject<string>();
  theme$ = this._theme.asObservable();

  setDarkTheme(name: string) {
    this._theme.next(name);
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    const thirdLavelDomain = this.document.location.origin
      .split("//")[1]
      .split(".")[0];

    switch (thirdLavelDomain) {
      case "ng-core":
        this.setDarkTheme("dark-theme");
        break;
      default:
    }
  }
}
