import { Component, OnInit } from "@angular/core";
import { LoaderService } from "../../../core/services/loader.service";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-loader",
  templateUrl: "./loader.component.html",
  styleUrls: ["./loader.component.scss"]
})
export class LoaderComponent implements OnInit {
  color = "primary";
  mode = "indeterminate";
  value = 50;
  isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  ngOnInit() {
    this.isLoading = this.loaderService.isLoading;
  }
  constructor(private loaderService: LoaderService) {}
}
