import { Injectable, Inject } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DOCUMENT } from "@angular/common";
import { OverlayContainer } from "@angular/cdk/overlay";
import { APIService } from "./api.service";
import { Theme } from "../../models/theme.model";
import { environment } from "../../../environments/environment";

@Injectable()
export class ThemeService {
  private _theme: BehaviorSubject<any> = new BehaviorSubject<any>();
  theme$ = this._theme.asObservable();
  constructor(
    @Inject(DOCUMENT) private document: Document,
    overlayContainer: OverlayContainer,
    apiService: APIService<Theme>
  ) {
    apiService.endpoint = `${environment.API_URL}/theme`;

    const thirdLavelDomainName = this.document.location.origin
      .split("//")[1]
      .split(".")[0];

    switch (thirdLavelDomainName) {
      case "ng-core":
        overlayContainer.getContainerElement().classList.add("web-theme");
        break;
        overlayContainer.getContainerElement().classList.add("hr-theme");
    }
  }
}
