import { NavItem } from "./../../../models/nav-item.model";
import { NavService } from "./../../../core/services/nav.service";
import {
  Component,
  ViewChild,
  ElementRef,
  ViewEncapsulation,
  AfterViewInit,
  Input
} from "@angular/core";

@Component({
  selector: "app-sidenav-side",
  templateUrl: "./sidenav-side.component.html",
  styleUrls: ["./sidenav-side.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class SidenavSideComponent implements AfterViewInit {
  @ViewChild("sideNav", { static: false }) sideNav: ElementRef;
  @Input() sideNavItems: NavItem[];
  navItems: NavItem[];

  constructor(private navService: NavService) {}

  ngAfterViewInit() {
    debugger;
    this.navService.sideNav = this.sideNav;
  }

  ngOnInit() {
    this.navItems = this.sideNavItems;
  }
}
