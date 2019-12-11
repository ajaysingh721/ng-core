import {
  Component,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  AfterViewInit,
  Input
} from "@angular/core";

import { NavService } from "../../core/services/nav.service";

import { NavItem } from "../../../../models/nav-item.model";

@Component({
  selector: "app-sidenav-side",
  templateUrl: "./sidenav-side.component.html",
  styleUrls: ["./sidenav-side.component.scss"],
  encapsulation: ViewEncapsulation.
})
export class SidenavSideComponent implements AfterViewInit {
  @ViewChild("sidenav", { static: false }) sideNav: ElementRef;
  @Input() sideNavItems: NavItem[];

  constructor(private navService: NavService) {}

  ngAfterViewInit() {
    this.navService.sideNav = this.sideNav;
  }

  ngOnInit() {}
}
