import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore) {
  }

  getUsers(): Observable<User[]> {
    return this.afs.collection<User>('users').valueChanges();
  }

  getUser(uid: string): Observable<User> {
    return this.afs.doc<User>(`users/${uid}`).valueChanges();
  }
}
