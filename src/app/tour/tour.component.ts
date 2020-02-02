import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss'],
})
export class TourComponent implements OnInit {

  public items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('/tours').valueChanges();
}

  ngOnInit() {}

}
