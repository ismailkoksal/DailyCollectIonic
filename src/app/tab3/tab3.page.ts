import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {


  public items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('/client').valueChanges();
}

}
