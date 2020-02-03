import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {TourService} from '../core/tour.service';
import {Tour} from '../models/tour';

@Component({
    selector: 'app-tour',
    templateUrl: './tour.component.html',
    styleUrls: ['./tour.component.scss'],
})
export class TourComponent implements OnInit {

    private tours$: Observable<Tour[]>;

    constructor(private tourService: TourService) {
    }

    ngOnInit() {
        this.tours$ = this.tourService.getTours();
    }

}
