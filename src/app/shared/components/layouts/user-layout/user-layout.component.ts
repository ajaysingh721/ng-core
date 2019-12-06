import { Component, OnInit } from "@angular/core";
import { APIService } from "src/app/core/services/api.service";
import { NavItem } from "src/app/models/nav-item.model";

@Component({
  selector: "app-user-layout",
  templateUrl: "./user-layout.component.html",
  styleUrls: ["./user-layout.component.scss"]
})
export class UserLayoutComponent implements OnInit {
  constructor(private apiService: APIService<NavItem>) {}
  navItems: NavItem[] = [];
  ngOnInit() {
    this.apiService.endpoint = "api/menues";
    this.apiService.getAll().subscribe(res => {
      this.navItems = res;
    });
  }
}
