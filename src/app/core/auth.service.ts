import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user$: Observable<firebase.User | null>;

    constructor(private afAuth: AngularFireAuth) {
        this.user$ = afAuth.user;
    }

    getUser(): Observable<firebase.User> {
        return this.user$;
    }

    signInWithEmailAndPassword(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return this.afAuth.auth.signInWithEmailAndPassword(email, password);
    }

    createUserWithEmailAndPassword(email: string, password: string): Promise<firebase.auth.UserCredential> {
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    signOut(): void {
        this.afAuth.auth.signOut();
    }

}
