import {Component, OnInit} from '@angular/core';
import {DriverService} from '../../../core/driver.service';
import {Observable} from 'rxjs';
import {Driver} from '../../../models/driver';
import {Vehicle} from '../../../models/vehicle';
import {VehicleService} from '../../../core/vehicle.service';
import {AddTourService} from '../../../core/add-tour.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-info-tour',
  templateUrl: './info-tour.component.html',
  styleUrls: ['./info-tour.component.scss'],
})
export class InfoTourComponent implements OnInit {
  private drivers$: Observable<Driver[]>;
  private vehicles$: Observable<Vehicle[]>;

  constructor(private driverService: DriverService, private vehicleService: VehicleService
  ,           private addTourService: AddTourService, public router: Router) { }

  ngOnInit() {
    this.drivers$ = this.driverService.getDrivers();
    this.vehicles$ = this.vehicleService.getVehicles();
  }


  public next(driver: string, vehicle: string, date: string) {
    const newDate = new Date(date);
    this.addTourService.setDate(newDate);
    this.addTourService.setDriver(driver);
    this.addTourService.setVehicle(vehicle);
    this.router.navigateByUrl('ovive/tours/validateTour');

  }

}
