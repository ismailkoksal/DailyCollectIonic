import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ChatPage} from './chat.page';
import {UserListComponent} from './user-list/user-list.component';

const routes: Routes = [
    {
        path: '',
        component: ChatPage,
        children: [
            {
                path: 'users',
                component: UserListComponent
            },
            {
                path: '',
                redirectTo: 'users',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ChatPageRoutingModule {
}
