import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { Router } from "@angular/router";
import { NavItem } from "../../../models/nav-item.model";

@Component({
  selector: "app-menu-item",
  templateUrl: "./menu-item.component.html",
  styleUrls: ["./menu-item.component.scss"]
})
export class MenuItemComponent implements OnInit {
  @Input() items: NavItem[];
  @ViewChild("childMenu", null) public childMenu;

  constructor(public router: Router) {}

  ngOnInit() {}
}
