import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {Tour} from '../models/tour';

@Injectable({
  providedIn: 'root'
})
export class TourService {

  constructor(private afs: AngularFirestore) {
  }

  getTours(): Observable<Tour[]> {
    return this.afs.collection<Tour>('tours').valueChanges();
  }
}
