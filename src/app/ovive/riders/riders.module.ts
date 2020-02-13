import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RidersPage} from './riders.page';
import {DriverComponent} from './driver/driver.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: RidersPage}])
  ],
  declarations: [RidersPage, DriverComponent],
})
export class RidersPageModule {
}
