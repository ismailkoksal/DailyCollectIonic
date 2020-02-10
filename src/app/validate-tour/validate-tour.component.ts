import { Component, OnInit } from '@angular/core';
import {ClientService} from '../core/client.service';
import {AddTourService} from '../core/add-tour.service';

@Component({
  selector: 'app-validate-tour',
  templateUrl: './validate-tour.component.html',
  styleUrls: ['./validate-tour.component.scss'],
})
export class ValidateTourComponent implements OnInit {
  public driver;
  public date;
  public vehicle;

  constructor(private addTourService: AddTourService) { }

  ngOnInit() {
    this.driver = this.addTourService.getDriver();
    this.date = this.addTourService.getDate();
    this.vehicle = this.addTourService.getVehicle();
  }

}
