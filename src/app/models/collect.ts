import {firestore} from 'firebase';

export interface Collect {
    id?: string;
    userId: string;
    isValid: boolean;
    customerName: string;
    address: string;
    city: string;
    date: firestore.Timestamp;
}
