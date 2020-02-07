import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Tour} from '../models/tour';
import {TourService} from '../core/tour.service';
import {map, tap} from 'rxjs/operators';
import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {log} from 'util';
import {DatePipe} from '@angular/common';
import {ClientService} from '../core/client.service';
import {Customer} from '../models/customer';

@Component({
    selector: 'app-today-tour',
    templateUrl: './today-tour.component.html',
    styleUrls: ['./today-tour.component.scss'],
})
export class TodayTourComponent implements OnInit {

    public customers$: Observable<Customer[]>;

    constructor(private customerService: ClientService) {
    }


    @Input() tour: Tour;

    public firstCollectPoint: Customer;
    public lastCollectPoint: Customer;
    public midlleCollectPoints: Customer[] = [];



    ngOnInit() {
        this.customers$ = this.customerService.getCustomers();


        this.customers$.subscribe(value => {
            this.firstCollectPoint = value[0];
            this.lastCollectPoint = value[value.length - 1];
            for (let i = 1; i < (value.length - 1); i++) {
                this.midlleCollectPoints.push(value[i]);
            }
        });

    }
}
