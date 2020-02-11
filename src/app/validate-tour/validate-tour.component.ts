import { Component, OnInit } from '@angular/core';
import {ClientService} from '../core/client.service';
import {AddTourService} from '../core/add-tour.service';
import {CollectPointsService} from '../core/collect-points.service';
import {Observable} from 'rxjs';
import {Tour} from '../models/tour';
import {TourClass} from '../models/tourClass';
import {CollectPoint} from '../models/collectPoint';
import {AngularFirestore} from '@angular/fire/firestore';
import {Toast} from '@capacitor/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-validate-tour',
  templateUrl: './validate-tour.component.html',
  styleUrls: ['./validate-tour.component.scss'],
})
export class ValidateTourComponent implements OnInit {
  public driver;
  public date;
  public vehicle;
  public city;
  public collectPoints: string[];
  public collectPointsIDs: string[];
  public db;

  constructor(private addTourService: AddTourService, private collectPointsService: AddTourService,
              private afs: AngularFirestore) { }

  ngOnInit() {
    this.driver = this.addTourService.getDriver();
    this.city = this.addTourService.getCityName();
    this.date = this.addTourService.getDate();
    this.vehicle = this.addTourService.getVehicle();
    this.collectPoints = this.collectPointsService.getCollectPoints();
    this.collectPointsIDs = this.collectPointsService.getCollectPointsIDs();
  }

  public validate() {
    const tour = {
      city: this.city,
      id_Rider: this.driver,
      date: firebase.firestore.Timestamp.fromDate(this.date),
      list_collectPoints:  this.collectPointsIDs
    };

    this.afs.collection('tours').doc('id').set(tour);
  }

}
