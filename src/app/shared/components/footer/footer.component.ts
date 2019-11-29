import { Component, OnInit } from "@angular/core";
import { ThemeService } from "../../../core/services/theme.service";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit {
  name: string;
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.theme$.subscribe(res => {
      this.name = res.name;
    });
  }
}
