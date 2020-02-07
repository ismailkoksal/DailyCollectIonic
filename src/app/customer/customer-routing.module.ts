import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CustomerPage} from './customer.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerPage,
    children: [
      {
        path: 'collects',
        children: [
          {
            path: '',
            loadChildren: () => import('./collects/collects.module').then(m => m.CollectsPageModule)
          }
        ]
      },
      {
        path: 'chat',
        children: [
          {
            path: '',
            loadChildren: () => import('./chat/chat.module').then(m => m.ChatPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'collects',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'collects',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerPageRoutingModule {
}
