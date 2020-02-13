import {Component, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import {environment} from '../../environments/environment';
import {Geolocation} from '@ionic-native/geolocation/ngx';

@Component({
    selector: 'app-ovive',
    templateUrl: './ovive.page.html',
    styleUrls: ['./ovive.page.scss'],
})
export class OvivePage implements OnInit {
    map: mapboxgl.Map;
    style = 'mapbox://styles/mapbox/outdoors-v9';
    lat = 37.75;
    lng = -122.41;

    constructor(private geolocation: Geolocation) {
        mapboxgl.accessToken = environment.mapbox.accessToken;
    }

    ngOnInit() {
        this.initMap();
    }

    initMap(): void {
        this.geolocation.getCurrentPosition().then(geoposition => {
            this.lat = geoposition.coords.latitude;
            this.lng = geoposition.coords.longitude;
            this.map.flyTo({
                center: [this.lat, this.lng]
            });
        }).catch(error => console.error('error getting location', error));

        this.buildMap();
    }

    buildMap(): void {
        this.map = new mapboxgl.Map({
            container: 'map',
            style: this.style,
            zoom: 13,
            center: [this.lng, this.lat]
        });
    }

}
