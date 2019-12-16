import { Theme } from "./../../models/theme.model";
import { Injectable, Inject } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { DOCUMENT } from "@angular/common";
import { OverlayContainer } from "@angular/cdk/overlay";
import { APIService } from "./api.service";
import { environment } from "../../../environments/environment";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from "@angular/router";

@Injectable()
export class ThemeService {
  private _theme: BehaviorSubject<any> = new BehaviorSubject<any>({});
  theme$ = this._theme.asObservable();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private overlayContainer: OverlayContainer,
    private apiService: APIService<Theme>
  ) {
    this.apiService.endpoint = "api/themes";
    const thirdLavelDomainName = this.document.location.origin
      .split("//")[1]
      .split(".")[0];

    switch (thirdLavelDomainName) {
      case "ng-core":
        this.apiService.get(1).subscribe(response => {
          this._theme.next(response);
        });
        break;
      default:
        this.apiService.get(2).subscribe(response => {
          this._theme.next(response);
        });
    }

    this.overlayContainer.getContainerElement().classList.add("web-theme");
  }
}
