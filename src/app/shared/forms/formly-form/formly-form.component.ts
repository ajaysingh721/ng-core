import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FormlyFieldConfig } from "@ngx-formly/core";

@Component({
  selector: "app-formly-form",
  templateUrl: "./formly-form.component.html",
  styleUrls: ["./formly-form.component.scss"]
})
export class FormlyFormComponent implements OnInit {
  form = new FormGroup({});
  @Input() models: any = {};
  @Input() fields: FormlyFieldConfig[] = [];
  @Output() onFormSubmit = new EventEmitter<any>();

  submit(model) {
    this.onFormSubmit.emit(model);
    console.log(model);
    console.log(this.form.value);
  }

  constructor() {}

  ngOnInit() {}
}
