import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {City} from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private afs: AngularFirestore) {
  }

  getCities(): Observable<City[]> {
    return this.afs.collection<City>('cities').valueChanges();
  }
}
