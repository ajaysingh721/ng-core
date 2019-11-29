import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../../../core/services/theme.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  logo: string;
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.theme$.subscribe(res => {
      this.logo = res.logo;
    });
  }
}
