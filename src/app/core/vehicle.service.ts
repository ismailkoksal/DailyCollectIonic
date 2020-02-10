import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {City} from '../models/city';
import {Vehicle} from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private afs: AngularFirestore) {
  }

  getVehicles(): Observable<Vehicle[]> {
    return this.afs.collection<Vehicle>('vehicles').valueChanges();
  }


}
