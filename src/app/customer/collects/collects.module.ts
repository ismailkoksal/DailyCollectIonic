import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CollectsPageRoutingModule} from './collects-routing.module';

import {CollectsPage} from './collects.page';
import {AddCollectComponent} from '../add-collect/add-collect.component';
import {SharedModule} from '../../shared/shared.module';
import {CollectService} from '../../core/collect.service';

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
    providers: [CollectService]
})
export class CollectsPageModule {
}
