import {Component, OnInit, ViewChild} from '@angular/core';
import {ChatService} from '../../core/chat.service';
import {Message} from '../../models/message';
import {Observable} from 'rxjs';
import {IonContent} from '@ionic/angular';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
    messages$: Observable<Message[]>;
    messageContent = '';
    @ViewChild(IonContent, {static: false}) content: IonContent;

    constructor(private chatService: ChatService) {
    }

    ngOnInit(): void {
        this.messages$ = this.chatService.getMessages('ZGvdnepxLvMqhuZNhWD5WEohFcf1');
    }

    sendMessage(content: string) {
        if (this.messageContent.trim()) {
            this.chatService.sendMessage('ZGvdnepxLvMqhuZNhWD5WEohFcf1', content).subscribe(
                () => {
                    this.messageContent = '';
                    this.scrollBottom();
                },
                error => console.error(error)
            );
        }
    }

    scrollBottom() {
        this.content.scrollToBottom(500);
    }

}
