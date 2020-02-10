import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {City} from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class AddTourService {
  public  cityName: string;
  public  driver: string;
  public  vehicle: string;
  public  date: Date;
  public  collectPoints: string[];

  constructor() {
  }
  getDriver() {
    return this.driver;
  }

  setDriver(driver: string) {
    this.driver = driver;
  }

  getVehicle() {
    return this.vehicle;
  }

  setVehicle(vehicle: string) {
    this.vehicle = vehicle;
  }

  getDate() {
    return this.date;
  }

  setDate(date: Date) {
    this.date = date;
  }


  getCityName(): string {
    return this.cityName;
  }

  setCityName(cityName: string){
    this.cityName = cityName;
  }

  setCollectPoints(collectpoints: string[]) {
    this.collectPoints = collectpoints;
  }

  getCollectPoints() {
    return this.collectPoints;
  }

}
