import { Component, OnInit } from "@angular/core";
import { NavItem } from "../../../models/nav-item.model";
import { APIService } from "../../../../core/services/api.service";

@Component({
  selector: "app-user-layout",
  templateUrl: "./user-layout.component.html",
  styleUrls: ["./user-layout.component.scss"]
})
export class UserLayoutComponent implements OnInit {
  constructor(private apiService: APIService) {}
  navItems: NavItem[] = [];
  ngOnInit() {
    this.apiService.endpoint = "api/menues";
    this.apiService.getAll().subscribe(res => {
      this.navItems = res;
    });
  }
}
