import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ToursPageRoutingModule} from './tours-routing.module';

import {ToursPage} from './tours.page';
import {TodayTourComponent} from './today-tour/today-tour.component';
import {InfoTourComponent} from './info-tour/info-tour.component';
import {CollectPointComponent} from './collect-point/collect-point.component';
import {TourComponent} from './tour/tour.component';
import {AddTourComponent} from './add-tour/add-tour.component';
import {ValidateTourComponent} from './validate-tour/validate-tour.component';
import {DetailTourComponent} from '../shared/detail-tour/detail-tour.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ToursPageRoutingModule
    ],
    declarations: [
        ToursPage,
        TourComponent,
        TodayTourComponent,
        CollectPointComponent,
        AddTourComponent,
        InfoTourComponent,
        ValidateTourComponent,
        DetailTourComponent
    ]
})
export class ToursPageModule {
}
