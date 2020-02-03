import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Driver} from '../models/driver';

@Injectable({
    providedIn: 'root'
})
export class DriverService {

    constructor(private afs: AngularFirestore) {
    }

    getDrivers(): Observable<Driver[]> {
        return this.afs.collection<Driver>('drivers').valueChanges({idField: 'id'});
    }
}
