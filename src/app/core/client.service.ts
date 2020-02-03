import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    constructor(private afs: AngularFirestore) {
    }

    getCustomers(): Observable<any> {
        return this.afs.collection('client').valueChanges();
    }
}
