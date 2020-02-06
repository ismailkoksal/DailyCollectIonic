import {Component} from '@angular/core';
import {NavController} from '@ionic/angular';
import {TourService} from '../core/tour.service';
import {Observable} from 'rxjs';
import {Tour} from '../models/tour';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    segment = 'card';
    public tours$: Observable<Tour[]>;
    public today_tours$: Observable<Tour[]>;


    constructor(public navCtrl: NavController, private tourService: TourService) {
        this.tours$ = this.tourService.getTours();
        this.today_tours$ = this.tours$.pipe(
            map(tours => tours.filter(tour => this.isToday(tour.date.toDate())))
        );

    }

    segmentChanged(ev: any) {
        console.log('Segment changed', ev);
    }


    isToday(someDate: Date) {
        const today = new Date();
        let tourDate: Date;
        tourDate = new Date(someDate);
        console.log(today.getMonth());
        console.log(tourDate.getMonth());
        return someDate.getDate() === today.getDate() &&
            someDate.getMonth() === today.getMonth() &&
            someDate.getFullYear() === today.getFullYear();
    }

   

}
