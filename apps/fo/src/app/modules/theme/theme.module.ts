import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MATERIAL_MODULES } from './material.barrel';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [...MATERIAL_MODULES],
  exports: [
    ...MATERIAL_MODULES,
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ] 
})
export class ThemeModule { }
