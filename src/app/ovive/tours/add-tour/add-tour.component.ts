import {Component, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';
import {AddTourService} from '../../../core/add-tour.service';
import {Observable} from 'rxjs';
import {CollectPoint} from '../../../models/collectPoint';
import {CollectPointsService} from '../../../core/collect-points.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-tour',
  templateUrl: './add-tour.component.html',
  styleUrls: ['./add-tour.component.scss'],
})
export class AddTourComponent implements OnInit {

  public cityName: string;
  public nbrSelect = 1;
  public selectedPoints: string[] = [];
  public selectedPointsIDs: string[] = [];
  public collectPoints$: Observable<CollectPoint[]>;
  private idName: Map<string, string> = new  Map<string, string>();


  constructor(public alertController: AlertController, private addTourService: AddTourService,
              private collectPointService: CollectPointsService, public router: Router) {
    this.cityName =  this.addTourService.getCityName();
    this.collectPoints$ = this.collectPointService.getCollectPoints();

    this.collectPoints$.subscribe(value => {
      value.forEach(value1 => {
        this.idName.set(value1.name, value1.clientId);
      }) ;
    });
  }

  ngOnInit() {


  }
  public addSelect(str: string) {
    this.selectedPoints.push(str);
    this.selectedPointsIDs.push(this.idName.get(str));
  }

  public next() {
    this.addTourService.setCollectPointsIDs(this.selectedPointsIDs);
    this.addTourService.setCollectPoints(this.selectedPoints);
    this.router.navigateByUrl('ovive/tours/infoTour');
  }
}
