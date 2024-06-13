import { NgModule } from '@angular/core';
import { MATERIAL_MODULES } from './material.barrel';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [...MATERIAL_MODULES, RouterModule],
  exports: [
    ...MATERIAL_MODULES,
    HeaderComponent
  ],
  declarations: [
    HeaderComponent
  ] 
})
export class ThemeModule { }
