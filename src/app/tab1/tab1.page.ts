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

    segment = 'today';
    public tours$: Observable<Tour[]>;
    public today_tours$: Observable<Tour[]>;
    public passed_tours$: Observable<Tour[]>;
    public coming_tours$: Observable<Tour[]>;


    constructor(public navCtrl: NavController, private tourService: TourService) {
        this.tours$ = this.tourService.getTours();
        this.today_tours$ = this.tours$.pipe(
            map(tours => tours.filter(tour => this.isToday(tour.date.toDate())))
        );

        this.passed_tours$ = this.tours$.pipe(
            map(tours => tours.filter(tour => this.isPassed(tour.date.toDate())))
        );

        this.coming_tours$ = this.tours$.pipe(
            map(tours => tours.filter(tour => this.isComing(tour.date.toDate())))
        );

    }

    segmentChanged(ev: any) {
        console.log('Segment changed', ev);
    }


    isToday(someDate: Date) {
        const today = new Date();
        let tourDate: Date;
        tourDate = new Date(someDate);
        return someDate.getDate() === today.getDate() &&
            someDate.getMonth() === today.getMonth() &&
            someDate.getFullYear() === today.getFullYear();
    }

    isPassed(someDate: Date) {
        const today = new Date();
        console.log(today.getFullYear());
        console.log(someDate.getFullYear());
        if (someDate.getFullYear() < today.getFullYear()) {
            return true;
        } else if (someDate.getFullYear() === today.getFullYear()) {
            if (someDate.getMonth() < today.getMonth()) {
                return true;
            } else if (someDate.getMonth() === today.getMonth()) {
                if (someDate.getDate() < today.getDate()) {
                    return true;
                }
            }
        }

        return false;
    }

    isComing(someDate: Date) {
        const today = new Date();
        console.log(today.getFullYear());
        console.log(someDate.getFullYear());
        if (someDate.getFullYear() > today.getFullYear()) {
            return true;
        } else if (someDate.getFullYear() === today.getFullYear()) {
            if (someDate.getMonth() > today.getMonth()) {
                return true;
            } else if (someDate.getMonth() === today.getMonth()) {
                if (someDate.getDate() > today.getDate()) {
                    return true;
                }
            }
        }

        return false;
    }


}
