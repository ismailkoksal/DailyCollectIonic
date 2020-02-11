import {Tour} from './tour';
import * as firebase from 'firebase';


export class TourClass implements Tour {
    city: string;
    date: firebase.firestore.Timestamp;
    id: string;
    // tslint:disable-next-line:variable-name
    id_Rider: string;
    // tslint:disable-next-line:variable-name
    list_collectPoints: string[];
    // tslint:disable-next-line:variable-name
    constructor(date: firebase.firestore.Timestamp, city: string, id_Rider: string, collectPoints: string[]) {
        this.city = city;
        this.date = date;
        this.list_collectPoints = collectPoints;
        this.id_Rider = id_Rider;
    }


}

