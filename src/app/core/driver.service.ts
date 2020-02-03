import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DriverService {

    constructor(private afs: AngularFirestore) {
    }

    getDrivers(): Observable<any> {
        return this.afs.collection('drivers').valueChanges();
    }
}
