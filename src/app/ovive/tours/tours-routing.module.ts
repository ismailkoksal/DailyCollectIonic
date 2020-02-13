import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ToursPage} from './tours.page';
import {AddTourComponent} from './add-tour/add-tour.component';
import {InfoTourComponent} from './info-tour/info-tour.component';
import {ValidateTourComponent} from './validate-tour/validate-tour.component';
import {DetailTourComponent} from "../shared/detail-tour/detail-tour.component";

const routes: Routes = [
    {
        path: '',
        component: ToursPage
    },
    {
        path: 'addTour',
        component: AddTourComponent
    },
    {
        path: 'infoTour',
        component: InfoTourComponent
    },
    {
        path: 'validateTour',
        component: ValidateTourComponent
    },
    {
        path: 'detailTour/:id',
        component: DetailTourComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ToursPageRoutingModule {
}
