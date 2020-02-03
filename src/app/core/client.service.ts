import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Customer} from '../models/customer';

@Injectable({
    providedIn: 'root'
})
export class ClientService {

    constructor(private afs: AngularFirestore) {
    }

    getCustomers(): Observable<Customer[]> {
        return this.afs.collection<Customer>('client').valueChanges({idField: 'id'});
    }
}
