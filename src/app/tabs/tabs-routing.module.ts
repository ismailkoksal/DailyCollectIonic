import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { AddTourComponent } from '../add-tour/add-tour.component';
import { InfoTourComponent } from '../info-tour/info-tour.component';
import {ValidateTourComponent} from '../validate-tour/validate-tour.component';
import {DetailTourComponent} from '../detail-tour/detail-tour.component';
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab1/tab1.module').then(m => m.Tab1PageModule)
          }
        ]
      },
      {
        path: 'tab2',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab2/tab2.module').then(m => m.Tab2PageModule)
          }
        ]
      },
      {
        path: 'tab3',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab3/tab3.module').then(m => m.Tab3PageModule)
          }
        ]
      },
      {
        path: 'tab4',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../tab4/tab4.module').then(m => m.Tab4PageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  },
  {
    path: 'tabs/tab1/addTour',
    component: AddTourComponent
  }
  ,
  {
    path: 'tabs/tab1/addTour/infoTour',
    component: InfoTourComponent
  },
  {
    path: 'tabs/tab1/addTour/infoTour/validateTour',
    component: ValidateTourComponent
  },
  {
    path: 'tabs/tab1/detailTour/:id',
    component: DetailTourComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
