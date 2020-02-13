import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {OvivePageRoutingModule} from './ovive-routing.module';

import {OvivePage} from './ovive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OvivePageRoutingModule
  ],
  declarations: [OvivePage]
})
export class OvivePageModule {
}
