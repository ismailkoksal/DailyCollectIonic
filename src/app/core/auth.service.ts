import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import * as firebase from 'firebase';
import {User} from 'firebase';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user$: Observable<User | null>;

    constructor(private afAuth: AngularFireAuth) {
        this.user$ = afAuth.authState;
    }

    getUser(): Observable<User> {
        return this.user$;
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

}
