import { Injectable, Inject } from "@angular/core";
import { Subject } from "rxjs";
import { DOCUMENT } from "@angular/common";

@Injectable()
export class ThemeService {
  private _darkTheme: Subject<boolean> = new Subject<boolean>();
  isDarkTheme = this._darkTheme.asObservable();

  setDarkTheme(isDarkTheme: boolean) {
    this._darkTheme.next(isDarkTheme);
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    const thirdLavelDomain = this.document.location.origin
      .split("//")[1]
      .split(".")[0];

    switch (thirdLavelDomain) {
      case "ng-core":
        this.setDarkTheme(true);
        break;
      default:
    }
  }
}
