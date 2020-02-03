import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TourService} from './tour.service';
import {ClientService} from './client.service';
import {DriverService} from './driver.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule
    ],
    providers: [
        TourService,
        ClientService,
        DriverService
    ]
})
export class CoreModule {
}
