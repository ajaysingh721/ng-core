import { Injectable, Inject } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DOCUMENT } from "@angular/common";

@Injectable()
export class ThemeService {
  private _theme: BehaviorSubject<any> = new BehaviorSubject<any>();
  theme$ = this._theme.asObservable();

  constructor(@Inject(DOCUMENT) private document: Document) {
    const thirdLavelDomainName = this.document.location.origin
      .split("//")[1]
      .split(".")[0];

    switch (thirdLavelDomainName) {
      case "ng-core":
        this._theme.next({ theme: "hr-theme", logo: "logo2" });
        break;
      default:
        this._theme.next({ theme: "web-theme", logo: "logo3" });
    }
  }
}
