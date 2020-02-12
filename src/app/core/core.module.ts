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
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AngularFireAuthGuardModule} from '@angular/fire/auth-guard';
import {CollectService} from './collect.service';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ChatService} from './chat.service';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FlexLayoutModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        AngularFireAuthGuardModule
    ],
    providers: [
        AuthService,
        TourService,
        ClientService,
        DriverService,
        ToastService,
        CollectService,
        ChatService
    ]
})
export class CoreModule {
}
