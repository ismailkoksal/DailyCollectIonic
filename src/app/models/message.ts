import {firestore} from 'firebase';

export interface Message {
    id?: string;
    author: string;
    content: string;
    createdAt: firestore.Timestamp;
}
