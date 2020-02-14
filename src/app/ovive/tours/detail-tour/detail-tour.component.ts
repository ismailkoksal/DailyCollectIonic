import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CollectPoint} from '../../../models/collectPoint';
import {ActivatedRoute} from '@angular/router';
import {GeocodeService} from '../../../core/geocode.service';
import {AddTourService} from '../../../core/add-tour.service';
import {CollectPointsService} from '../../../core/collect-points.service';
import {Observable} from 'rxjs';
import {Tour} from '../../../models/tour';
import {TourService} from '../../../core/tour.service';

@Component({
    selector: 'app-detail-tour',
    templateUrl: './detail-tour.component.html',
    styleUrls: ['./detail-tour.component.scss'],
})
export class DetailTourComponent implements OnInit {

    segment = 'collectPoints';
    collectPointsIDs: string[] = [];
    collectPointsNames: string[] = [];
    public tours: Observable<Tour[]>;
    address = 'London';
    tour: Tour;
    location: Location;
    loading: boolean;
    tourId: string;

    constructor(private route: ActivatedRoute, private geocodeService: GeocodeService,
                private ref: ChangeDetectorRef, private tourService: TourService, private collectPointsService: CollectPointsService) {
        this.tourId = this.route.snapshot.params.id;
    }

    ngOnInit() {
        this.tours = this.tourService.getTours();
        this.tours.subscribe(value => {
            value.forEach(value1 => {
                if (value1.id.toString() === this.tourId.toString()) {
                    const temp: Tour = value1;
                    this.tour = temp;
                    this.showLocation();
                    this.collectPointsIDs = this.tour.list_collectPoints;
                    this.getCollectPointsNames();
                }
            });
        });

    }

    getCollectPointsNames() {
        const collecPoints: Observable<CollectPoint[]> = this.collectPointsService.getCollectPoints();
        collecPoints.subscribe(value => {
            value.forEach(value1 => {
                this.collectPointsIDs.forEach(value2 => {
                    const id: string = value2;
                    const point: CollectPoint = value1;
                    const pointID: string = point.clientId;
                    if (pointID ===  id) {
                        this.collectPointsNames.push(value1.name);
                    }
                });
            });
        });

    }

    showLocation() {
        this.addressToCoordinates();
    }

    addressToCoordinates() {
        this.address = this.tourId;
        console.log(this.tourId);
        this.loading = true;
        this.geocodeService.geocodeAddress(this.tour.city)
            .subscribe((location: Location) => {
                    this.location = location;
                    this.loading = false;
                    this.ref.detectChanges();
                }
            );
    }

}
