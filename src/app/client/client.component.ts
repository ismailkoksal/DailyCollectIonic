import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {

  public items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('/client').valueChanges();
}

  ngOnInit() {}

}
