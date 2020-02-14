import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {MapsAPILoader} from '@agm/core';
import {fromPromise} from 'rxjs/internal-compatibility';

declare var google: any;

@Injectable({
    providedIn: 'root'
})

export class GeocodeService {

    private geocoder: any;

    constructor(private mapLoader: MapsAPILoader) {
    }

    private initGeocoder() {
        console.log('Init geocoder!');
        this.geocoder = new google.maps.Geocoder();
    }


    geocodeAddress(location: string): Observable<Location> {
        console.log('Start geocoding!');
        // @ts-ignore
        return this.waitForMapsToLoad().pipe(
            // filter(loaded => loaded),
            switchMap(() => {
                return new Observable(observer => {
                    this.geocoder.geocode({'address': location},
                        (results, status) => {
                        if (status === google.maps.GeocoderStatus.OK) {
                            console.log('Geocoding complete!');
                            observer.next({
                                lat: results[0].geometry.location.lat(),
                                lng: results[0].geometry.location.lng()
                            });
                        } else {
                            console.log('Error - ', results, ' & Status - ', status);
                            observer.next({lat: 0, lng: 0});
                        }
                        observer.complete();
                    });
                });
            })
        );
    }

    private waitForMapsToLoad(): Observable<boolean> {
        if (!this.geocoder) {
            return fromPromise(this.mapLoader.load())
                .pipe(
                    tap(() => this.initGeocoder()),
                    map(() => true)
                );
        }
        return of(true);
    }

}
