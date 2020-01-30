import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss'],
})
export class DriverComponent implements OnInit {
  public items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('/drivers').valueChanges();
}

  ngOnInit() {}

}
