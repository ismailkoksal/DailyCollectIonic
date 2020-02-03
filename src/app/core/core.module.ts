import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TourService} from './tour.service';
import {ClientService} from './client.service';
import {DriverService} from './driver.service';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthService} from './auth.service';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule
    ],
    providers: [
        AuthService,
        TourService,
        ClientService,
        DriverService
    ]
})
export class CoreModule {
}
