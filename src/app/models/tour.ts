import * as firebase from 'firebase';


export interface Tour {
    id: string;
    date: firebase.firestore.Timestamp;
    city: string;
    list_collectPoints: string[];
}
