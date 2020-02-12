import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from './auth.service';
import {switchMap} from 'rxjs/operators';
import {Message} from '../models/message';
import {Observable} from 'rxjs';
import {firestore} from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    constructor(private afs: AngularFirestore, private authService: AuthService) {
    }

    getMessages(friendId): Observable<Message[]> {
        return this.authService.getUser().pipe(
            switchMap(user => {
                console.log(user.uid);
                const chatId = this.getChatId(user.uid, friendId);
                return this.afs
                    .collection('chats')
                    .doc(chatId)
                    .collection<Message>('messages', ref => ref.orderBy('createdAt'))
                    .valueChanges();
            })
        );
    }

    sendMessage(friendId: string, messageContent: string): Observable<any> {
        return this.authService.getUser().pipe(
            switchMap(user => {
                const chatId = this.getChatId(user.uid, friendId);
                const message: Message = {
                    author: user.displayName,
                    content: messageContent,
                    createdAt: firestore.Timestamp.now()
                };
                return this.afs
                    .collection('chats')
                    .doc(chatId)
                    .collection('messages').add(message);
            })
        );
    }

    private getChatId(userOneId: string, userTwoId: string): string {
        const chatUsers = [userOneId, userTwoId].sort((a, b) => a.localeCompare(b));
        return `${chatUsers[0]}-${chatUsers[1]}`;
    }
}
