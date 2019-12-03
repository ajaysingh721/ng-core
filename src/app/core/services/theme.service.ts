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
    apiService.endpoint = "api/theme";
    const thirdLavelDomainName = this.document.location.origin
      .split("//")[1]
      .split(".")[0];

    console.log(thirdLavelDomainName);
    switch (thirdLavelDomainName) {
      case "ng-core":
        this._theme.next({
          id: 1,
          name: "Genpact",
          theme: "web-theme",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Genpact_logo.svg/1200px-Genpact_logo.svg.png",
          user: "https://image.flaticon.com/icons/svg/17/17004.svg"
        });
        this.overlayContainer.getContainerElement().classList.add("web-theme");
        break;
        this._theme.next({
          id: 2,
          name: "HeadStrong",
          theme: "hr-theme",
          logo:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Genpact_logo.svg/1200px-Genpact_logo.svg.png",
          user: "https://image.flaticon.com/icons/svg/17/17004.svg"
        });
        // this.apiService.get<Theme>(1).subscribe(res => {
        //   //this._theme.next(res);
        //   console.log(res);
        // });
        this.overlayContainer.getContainerElement().classList.add("hr-theme");
        break;
    }
  }
}
