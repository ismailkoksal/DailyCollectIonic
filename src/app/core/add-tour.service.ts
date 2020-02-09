import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {City} from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class AddTourService {
  public  cityName: string;

  constructor() {
  }
  getCityName(): string {
    return this.cityName;
  }

  setCityName(cityName: string){
    this.cityName = cityName;
  }
}
