import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  segment = 'card'
  constructor(public navCtrl: NavController) {}
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

}
