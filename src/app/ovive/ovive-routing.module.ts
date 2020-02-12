import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {OvivePage} from './ovive.page';

const routes: Routes = [
  {
    path: '',
    component: OvivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OvivePageRoutingModule {
}
