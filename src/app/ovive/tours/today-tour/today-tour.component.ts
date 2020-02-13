import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Tour} from '../../../models/tour';
import * as firebase from 'firebase';
import {ClientService} from '../../../core/client.service';
import {Customer} from '../../../models/customer';
import {Router} from '@angular/router';

@Component({
    selector: 'app-today-tour',
    templateUrl: './today-tour.component.html',
    styleUrls: ['./today-tour.component.scss'],
})
export class TodayTourComponent implements OnInit {

    public customers$: Observable<Customer[]>;

    constructor(private customerService: ClientService, public router: Router) {
    }


    @Input() tour: Tour;

    public firstCollectPoint: Customer;
    public lastCollectPoint: Customer;
    public midlleCollectPoints: Customer[] = [];



    ngOnInit() {
        this.customers$ = this.customerService.getCustomers();

        this.customers$.subscribe(value => {
            for (let i = 0; i < value.length; i++) {
                for (let j = 0; j < this.tour.list_collectPoints.length; j++) {
                    if ( j === 0 || j === (this.tour.list_collectPoints.length - 1)) {
                        if (this.tour.list_collectPoints[0] === value[i].id_collect_point) {
                            this.firstCollectPoint = value[i];
                        }
                        if (this.tour.list_collectPoints[this.tour.list_collectPoints.length - 1] === value[i].id_collect_point) {
                            this.lastCollectPoint = value[i];
                        }
                    } else if (this.tour.list_collectPoints[j] === value[i].id_collect_point) {
                        this.midlleCollectPoints.push(value[i]);
                    }
                }

            }
        });

    }

    details() {
        this.router.navigate(['tabs/tab1/detailTour/temp']);
    }
}
