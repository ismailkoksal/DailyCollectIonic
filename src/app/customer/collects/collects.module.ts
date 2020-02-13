import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CollectsPageRoutingModule} from './collects-routing.module';

import {CollectsPage} from './collects.page';
import {AddCollectComponent} from '../add-collect/add-collect.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CollectsPageRoutingModule,
        SharedModule
    ],
    declarations: [CollectsPage, AddCollectComponent],
    entryComponents: [AddCollectComponent],
    providers: [DatePipe]
})
export class CollectsPageModule {
}
