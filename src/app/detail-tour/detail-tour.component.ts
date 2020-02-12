import { Component, OnInit } from '@angular/core';
import {CollectPoint} from '../models/collectPoint';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-tour',
  templateUrl: './detail-tour.component.html',
  styleUrls: ['./detail-tour.component.scss'],
})
export class DetailTourComponent implements OnInit {

  segment = 'collectPoints';
  collectPoints: CollectPoint[] = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
  }

}
