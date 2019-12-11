import {
  Component,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  AfterViewInit
} from "@angular/core";

import { NavService } from "../../core/services/nav.service";

@Component({
  selector: "app-sidenav-side",
  templateUrl: "./sidenav-side.component.html",
  styleUrls: ["./sidenav-side.component.scss"]
})
export class SidenavSideComponent implements AfterViewInit {
  @ViewChild("sidenav", { static: false }) sideNav: ElementRef;

  constructor(private navService: NavService) {}

  ngAfterViewInit() {
    this.navService.sideNav = this.sideNav;
  }

  ngOnInit() {}
}
