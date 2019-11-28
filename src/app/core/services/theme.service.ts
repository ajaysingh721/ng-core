import { Injectable, Inject } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DOCUMENT } from "@angular/common";

@Injectable()
export class ThemeService {
  private _theme: BehaviorSubject<string> = new BehaviorSubject<string>();
  theme$ = this._theme.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) {
    const thirdLavelDomainName = this.document.location.origin
      .split("//")[1]
      .split(".")[0];

    switch (thirdLavelDomainName) {
      case "ng-core":
        this._theme.next("web-theme");
        break;
      default:
        this._theme.next("hr-theme");
    }
  }
}
