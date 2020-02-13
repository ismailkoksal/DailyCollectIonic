import {firestore} from 'firebase';

export interface Collect {
    id?: string;
    userId: string;
    date: firestore.Timestamp;
}
