import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OvivePage} from './ovive.page';

const routes: Routes = [
    {
        path: '',
        component: OvivePage,
        children: [
            {
                path: 'tours',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./tours/tours.module').then(m => m.ToursPageModule)
                    }
                ]
            },
            {
                path: 'riders',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./riders/riders.module').then(m => m.RidersPageModule)
                    }
                ]
            },
            {
                path: 'customers',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./customers/customers.module').then(m => m.CustomersPageModule)
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
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
                redirectTo: 'tours',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'tours',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OvivePageRoutingModule {
}
