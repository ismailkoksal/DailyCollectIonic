import {Component, OnInit} from '@angular/core';
import {AddTourService} from '../../../core/add-tour.service';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

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
  public validateIsClicked = false;

  constructor(private addTourService: AddTourService, private collectPointsService: AddTourService,
              private afs: AngularFirestore, public router: Router) { }

  ngOnInit() {
    this.driver = this.addTourService.getDriver();
    this.city = this.addTourService.getCityName();
    this.date = this.addTourService.getDate();
    this.vehicle = this.addTourService.getVehicle();
    this.collectPoints = this.collectPointsService.getCollectPoints();
    this.collectPointsIDs = this.collectPointsService.getCollectPointsIDs();
  }

  public validate() {
    this.validateIsClicked = true;
    const tourID =  firebase.firestore.Timestamp.fromDate(new Date());
    const tour = {
      id: tourID.toMillis().toString(),
      city: this.city,
      id_Rider: this.driver,
      date: firebase.firestore.Timestamp.fromDate(this.date),
      list_collectPoints:  this.collectPointsIDs
    };
    this.afs.collection('tours').doc(tourID.toMillis().toString()).set(tour);
    this.router.navigate(['']);
  }

}
