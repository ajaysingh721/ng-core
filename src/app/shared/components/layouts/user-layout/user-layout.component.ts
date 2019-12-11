import { Component, OnInit } from "@angular/core";
import { APIService } from "../../../../core/services/api.service";
import { NavItem } from "../../../../models/nav-item.model";

@Component({
  selector: "app-user-layout",
  templateUrl: "./user-layout.component.html",
  styleUrls: ["./user-layout.component.scss"]
})
export class UserLayoutComponent implements OnInit {
  constructor(private apiService: APIService<NavItem>) {}
  navItems: NavItem[] = [];
  sideNavItems: NavItem[] = [];
  ngOnInit() {
    this.apiService.endpoint = "api/menues";
    this.apiService.getAll().subscribe(res => {
      this.navItems = res;
      this.sideNavItems = this.navItems;
    });
  }
}
