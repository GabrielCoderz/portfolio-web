import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { BtnPrimaryComponent } from 'src/app/shared/btn-primary/btn-primary.component';
import { MainSectionComponent } from 'src/app/shared/main-section/main-section.component';
import { MainVisualComponent } from 'src/app/shared/main-visual/main-visual.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BtnPrimaryComponent,
    MainSectionComponent,
    MainVisualComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
