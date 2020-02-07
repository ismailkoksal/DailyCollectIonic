import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Collect} from '../models/collect';
import {AngularFirestore} from '@angular/fire/firestore';
import {switchMap} from 'rxjs/operators';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class CollectService {

    constructor(
        private afs: AngularFirestore,
        private auth: AuthService
    ) {
    }

    getCollects(): Observable<Collect[]> {
        return this.auth.getUser().pipe(
            switchMap(user => this.afs
                .collection('customers')
                .doc(user.uid)
                .collection<Collect>('collects')
                .valueChanges({idField: 'id'}))
        );
    }

    addCollect(collect: Collect): Observable<any> {
        return this.auth.getUser().pipe(
            switchMap(user => this.afs
                .collection('customers')
                .doc(user.uid)
                .collection<Collect>('collects')
                .add(collect))
        );
    }
}
