import {firestore} from 'firebase';

export interface Collect {
    id?: string;
    date: firestore.Timestamp;
}
