import { Component, OnInit } from '@angular/core';
import {DriverService} from '../core/driver.service';
import {Observable} from 'rxjs';
import {Driver} from '../models/driver';
import {Vehicle} from '../models/vehicle';
import {VehicleService} from '../core/vehicle.service';
import {AddTourService} from '../core/add-tour.service';

@Component({
  selector: 'app-info-tour',
  templateUrl: './info-tour.component.html',
  styleUrls: ['./info-tour.component.scss'],
})
export class InfoTourComponent implements OnInit {
  private drivers$: Observable<Driver[]>;
  private vehicles$: Observable<Vehicle[]>;

  constructor(private driverService: DriverService, private vehicleService: VehicleService
  ,           private addTourService: AddTourService) { }

  ngOnInit() {
    this.drivers$ = this.driverService.getDrivers();
    this.vehicles$ = this.vehicleService.getVehicles();
  }


  public next(driver: string, vehicle: string, date: Date) {
    this.addTourService.setDate(date);
    this.addTourService.setDriver(driver);
    this.addTourService.setVehicle(vehicle);
  }

}
