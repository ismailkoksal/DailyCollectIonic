import {Component} from '@angular/core';
import {AlertController, NavController} from '@ionic/angular';
import {TourService} from '../core/tour.service';
import {CityService} from '../core/city.service';
import {AddTourService} from '../core/add-tour.service';
import {Observable} from 'rxjs';
import {Tour} from '../models/tour';
import {map} from 'rxjs/operators';
import {City} from '../models/city';
import {strategy} from '@angular-devkit/core/src/experimental/jobs';
import {invalid} from '@angular/compiler/src/render3/view/util';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

    segment = 'today';
    public tours$: Observable<Tour[]>;
    public cities$: Observable<City[]>;
    public today_tours$: Observable<Tour[]>;
    public passed_tours$: Observable<Tour[]>;
    public coming_tours$: Observable<Tour[]>;
    testCheckboxOpen: boolean;
    testCheckboxResult;
    public citiesArray = [];


    constructor(public navCtrl: NavController, private tourService: TourService, private addTourService: AddTourService, private cityService: CityService,
                public alertController: AlertController, public router: Router) {
        this.tours$ = this.tourService.getTours();
        this.cities$ = this.cityService.getCities();
        this.today_tours$ = this.tours$.pipe(
            map(tours => tours.filter(tour => this.isToday(tour.date.toDate())))
        );

        this.passed_tours$ = this.tours$.pipe(
            map(tours => tours.filter(tour => this.isPassed(tour.date.toDate())))
        );

        this.coming_tours$ = this.tours$.pipe(
            map(tours => tours.filter(tour => this.isComing(tour.date.toDate())))
        );

        this.cities$.subscribe(value => {
           value.forEach(value1 => {
               this.citiesArray.push(value1.name);
           }) ;
        });

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

    addTour() {
        this.presentCities();
    }

    public async presentCities() {

        let tabl: any[] = [];


        let index = 0;
        this.citiesArray.forEach(val => {
            index++;
            let str: string = val;
            let item = {
                    name: ('radio' + index),
                    type: 'radio',
                    label: str,
                    value: str
                };

            tabl.push(item);
        });
        const alert = await this.alertController.create({
            header: 'Radio',
            inputs  : tabl,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Ok',
                    handler: (city) => {
                        this.addTourService.setCityName(city);
                        this.router.navigate(['tabs/tab1/addTour']);
                    }
                }
            ]
        });

        await alert.present();
    }


}
