import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DriverService} from '../core/driver.service';

@Component({
    selector: 'app-driver',
    templateUrl: './driver.component.html',
    styleUrls: ['./driver.component.scss'],
})
export class DriverComponent implements OnInit {
    private drivers$: Observable<any[]>;

    constructor(private driverService: DriverService) {
    }

    ngOnInit() {
        this.drivers$ = this.driverService.getDrivers();
    }

}
