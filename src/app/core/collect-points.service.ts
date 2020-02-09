import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Driver} from '../models/driver';
import {AngularFirestore} from '@angular/fire/firestore';
import {City} from '../models/city';
import {CollectPoint} from '../models/collectPoint';

@Injectable({
  providedIn: 'root'
})
export class CollectPointsService {

  constructor(private afs: AngularFirestore) { }

  public getCollectPoints(): Observable<CollectPoint[]> {
    return this.afs.collection<CollectPoint>('collectPoints').valueChanges();
  }
}
