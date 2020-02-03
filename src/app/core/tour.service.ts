import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private afs: AngularFirestore) {
  }

  getTours(): Observable<any> {
    return this.afs.collection('tours').valueChanges();
  }
}
