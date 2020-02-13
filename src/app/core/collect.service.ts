import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Collect} from '../models/collect';
import {AngularFirestore} from '@angular/fire/firestore';
import {switchMap} from 'rxjs/operators';
import {AuthService} from './auth.service';
import {firestore} from 'firebase';

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
                .collection<Collect>('collects', ref => ref.where('userId', '==', user.uid).orderBy('date'))
                .valueChanges({idField: 'id'}))
        );
    }

    addCollect(date: firestore.Timestamp): Observable<any> {
        return this.auth.getUser().pipe(
            switchMap(user => {
                const collect: Collect = {
                    userId: user.uid,
                    isValid: false,
                    date
                };
                return this.afs
                    .collection<Collect>('collects')
                    .add(collect);
            })
        );
    }

    getCollectsNotInTour(): Observable<Collect[]> {
        return this.afs.collection<Collect>('collects', ref => ref.where('isValid', '==', false)).valueChanges({idField: 'id'});
    }

    setCollectValid(collectId: string) {
        this.afs.doc(`collects/${collectId}`).update(
            {
                isValid: true
            }
        );
    }
}
