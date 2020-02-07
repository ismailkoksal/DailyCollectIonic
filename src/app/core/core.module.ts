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
import {ToastService} from './toast.service';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireAuthGuardModule} from '@angular/fire/auth-guard';
import {CollectService} from './collect.service';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FlexLayoutModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        HttpClientModule,
        AngularFireAuthGuardModule
    ],
    providers: [
        AuthService,
        TourService,
        ClientService,
        DriverService,
        ToastService,
        CollectService
    ]
})
export class CoreModule {
}
