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
import {DetailTourComponent} from './detail-tour/detail-tour.component';
import {MapComponent} from './map/map.component';
// @ts-ignore
import { AgmCoreModule } from '@agm/core';
import {GeocodeService} from '../../core/geocode.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ToursPageRoutingModule,
        AgmCoreModule.forRoot({
            // please get your own API key here:
            // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
            apiKey: 'AIzaSyD1ygdVoPHePSWOKqfCEe1cFM6El_RfeIY'
        })
    ],
    providers: [GeocodeService],
    declarations: [
        ToursPage,
        TourComponent,
        TodayTourComponent,
        CollectPointComponent,
        AddTourComponent,
        InfoTourComponent,
        ValidateTourComponent,
        DetailTourComponent,
        MapComponent
    ],
})
export class ToursPageModule {
}
