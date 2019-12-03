import { Injectable, Inject, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DOCUMENT } from "@angular/common";
import { OverlayContainer } from "@angular/cdk/overlay";
import { APIService } from "./api.service";
import { Theme } from "../../models/theme.model";
import { environment } from "../../../environments/environment";

@Injectable()
export class ThemeService implements OnInit {
  private _theme: BehaviorSubject<any> = new BehaviorSubject<any>();
  theme$ = this._theme.asObservable();
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private overlayContainer: OverlayContainer,
    private apiService: APIService<Theme>
  ) {
    apiService.endpoint = `/theme`;
    const thirdLavelDomainName = this.document.location.origin
      .split("//")[1]
      .split(".")[0];

    console.log(thirdLavelDomainName);
    switch (thirdLavelDomainName) {
      case "ng-core":
        this.apiService.get<Theme>(1).subscribe(res => {
          //this._theme.next(res);
          console.log(res);
        });
        this.overlayContainer.getContainerElement().classList.add("web-theme");
        break;
        this.overlayContainer.getContainerElement().classList.add("hr-theme");
    }
  }
}
