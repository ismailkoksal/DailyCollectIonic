import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CollectsPage} from './collects.page';

const routes: Routes = [
    {
        path: '',
        component: CollectsPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CollectsPageRoutingModule {
}
