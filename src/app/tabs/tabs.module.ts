import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {AddTourComponent} from '../add-tour/add-tour.component';
import {InfoTourComponent} from '../info-tour/info-tour.component';
import {ValidateTourComponent} from '../validate-tour/validate-tour.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage, AddTourComponent, InfoTourComponent, ValidateTourComponent]
})
export class TabsPageModule {}
