import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GeocodeService} from '../../../core/geocode.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  address = 'London';
  location: Location;
  loading: boolean;

  constructor(  private geocodeService: GeocodeService,
                private ref: ChangeDetectorRef) { }

  ngOnInit() {}

  showLocation() {
    this.addressToCoordinates();
  }

  addressToCoordinates() {
    this.loading = true;
    this.geocodeService.geocodeAddress(this.address)
        .subscribe((location: Location) => {
              this.location = location;
              this.loading = false;
              this.ref.detectChanges();
            }
        );
  }

}
