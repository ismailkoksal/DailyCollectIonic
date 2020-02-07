import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab1Page } from './tab1.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TourComponent } from '../tour/tour.component';
import { TodayTourComponent } from '../today-tour/today-tour.component';
@NgModule({
  imports: [
    ReactiveFormsModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page, TourComponent, TodayTourComponent]
})
export class Tab1PageModule {}
