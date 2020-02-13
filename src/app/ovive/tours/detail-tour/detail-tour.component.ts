import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CollectPoint} from '../../../models/collectPoint';
import {ActivatedRoute} from '@angular/router';
import {GeocodeService} from '../../../core/geocode.service';

@Component({
    selector: 'app-detail-tour',
    templateUrl: './detail-tour.component.html',
    styleUrls: ['./detail-tour.component.scss'],
})
export class DetailTourComponent implements OnInit {

    segment = 'collectPoints';
    collectPoints: CollectPoint[] = [];
    address = 'London';
    location: Location;
    loading: boolean;

    constructor(private route: ActivatedRoute, private geocodeService: GeocodeService,
                private ref: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.showLocation();
    }

    showLocation() {
        this.addressToCoordinates();
    }

    addressToCoordinates() {
        const id: string = this.route.snapshot.params.id;
        this.address = id;
        console.log(id);
        this.loading = true;
        this.geocodeService.geocodeAddress(id.toString())
            .subscribe((location: Location) => {
                    this.location = location;
                    this.loading = false;
                    this.ref.detectChanges();
                }
            );
    }

}
