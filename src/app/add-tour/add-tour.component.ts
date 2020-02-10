import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {AddTourService} from '../core/add-tour.service';
import {Observable} from 'rxjs';
import {Tour} from '../models/tour';
import {CollectPoint} from '../models/collectPoint';
import {CollectPointsService} from '../core/collect-points.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.scss'],
})
export class AddTourComponent implements OnInit {

  public cityName: string;
  public nbrSelect = 1;
  public points = [];
  public collectPoints$: Observable<CollectPoint[]>;


  constructor(public alertController: AlertController, private addTourService: AddTourService,
              private collectPointService: CollectPointsService, public router: Router) {
    this.cityName =  this.addTourService.getCityName();
    this.collectPoints$ = this.collectPointService.getCollectPoints();
  }

  ngOnInit() {


  }
  public addSelect(str: string) {
    this.points.push(str);
  }

  public next() {
    this.addTourService.setCollectPoints(this.points);
    this.router.navigate(['tabs/tab1/addTour/infoTour']);
  }
}
