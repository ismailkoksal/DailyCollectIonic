import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DriverService} from '../core/driver.service';
import {Driver} from '../models/driver';

@Component({
    selector: 'app-driver',
    templateUrl: './driver.component.html',
    styleUrls: ['./driver.component.scss'],
})
export class DriverComponent implements OnInit {
    private drivers$: Observable<Driver[]>;

    constructor(private driverService: DriverService) {
    }

    ngOnInit() {
        this.drivers$ = this.driverService.getDrivers();
    }

}
