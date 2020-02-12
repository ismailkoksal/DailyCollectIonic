import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Observable, of} from 'rxjs';
import {first, switchMap} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import {User} from '../models/user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user$: Observable<User | null>;

    constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore
    ) {
        this.user$ = afAuth.authState.pipe(
            switchMap(user => {
                if (user) {
                    return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
                }
                return of(null);
            })
        );
    }

    getUser(): Observable<User> {
        return this.user$.pipe(first());
    }

    signInWithEmailAndPassword(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    createUserWithEmailAndPassword(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    signOut(): Promise<void> {
        return this.afAuth.auth.signOut();
    }

    addUserData(user: User): Promise<void> {
        return this.afs.doc(`users/${user.uid}`).set(user);
    }

}
