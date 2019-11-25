import { NgModule } from "@angular/core";

import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const sharedComponents = [
  HeaderComponent,
  FooterComponent,
  PageNotFoundComponent
];

@NgModule({
  declarations: sharedComponents,
  exports: sharedComponents
})
export class SharedModule {}
