import { Theme } from "./../../models/theme.model";
import { Injectable, Inject } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DOCUMENT } from "@angular/common";
import { OverlayContainer } from "@angular/cdk/overlay";
import { APIService } from "./api.service";
import { environment } from "../../../environments/environment";

@Injectable()
export class ThemeService {
  private _theme: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(
    new Theme()
  );
  theme$ = this._theme.asObservable();
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private overlayContainer: OverlayContainer,
    private apiService: APIService<Theme>
  ) {
    apiService.endpoint = "api/themes";
    const thirdLavelDomainName = this.document.location.origin
      .split("//")[1]
      .split(".")[0];

    console.log(thirdLavelDomainName);
    switch (thirdLavelDomainName) {
      case "ng-core":
        this.apiService.get(2).subscribe(response => {
          debugger;
          this._theme.next(response);
          this.overlayContainer
            .getContainerElement()
            .classList.add(response.theme);
        });
        break;
      default:
        this.apiService.get(1).subscribe(response => {
          debugger;
          this._theme.next(response);
          this.overlayContainer
            .getContainerElement()
            .classList.add(response.theme);
        });
    }
  }
}
