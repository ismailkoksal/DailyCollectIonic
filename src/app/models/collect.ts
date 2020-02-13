import {firestore} from 'firebase';

export interface Collect {
    id?: string;
    userId: string;
    isValid: boolean;
    date: firestore.Timestamp;
}
