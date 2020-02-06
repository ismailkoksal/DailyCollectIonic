import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Tour} from '../models/tour';
import {TourService} from '../core/tour.service';
import {map, tap} from 'rxjs/operators';
import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {log} from 'util';
import {DatePipe} from '@angular/common';

@Component({
    selector: 'app-today-tour',
    templateUrl: './today-tour.component.html',
    styleUrls: ['./today-tour.component.scss'],
})
export class TodayTourComponent implements OnInit {


    constructor() {
    }

    @Input() tour: Tour;


    ngOnInit() {

    }


}
