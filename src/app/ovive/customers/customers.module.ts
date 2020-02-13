import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CustomersPage} from './customers.page';
import {ClientComponent} from './client/client.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: CustomersPage}])
  ],
  declarations: [CustomersPage, ClientComponent]
})
export class CustomersPageModule {
}
