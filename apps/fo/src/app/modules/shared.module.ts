import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ThemeModule } from "./theme/theme.module";

@NgModule({
  exports: [
    ThemeModule, 
    ReactiveFormsModule
  ]
})
export class SharedModule { }