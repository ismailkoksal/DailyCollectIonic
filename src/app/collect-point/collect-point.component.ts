import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../models/tour';
import {CollectPoint} from '../models/collectPoint';

@Component({
  selector: 'app-collect-point',
  templateUrl: './collect-point.component.html',
  styleUrls: ['./collect-point.component.scss'],
})
export class CollectPointComponent implements OnInit {

  constructor() { }

  @Input() point: string;

  ngOnInit() {
  }

}
