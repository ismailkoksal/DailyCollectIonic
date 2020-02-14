import {Component, OnInit} from '@angular/core';
import {ChatService} from '../../../core/chat.service';
import {combineLatest, Observable} from 'rxjs';
import {AuthService} from '../../../core/auth.service';
import {map, switchMap} from 'rxjs/operators';
import {User} from '../../../models/user';
import {UserService} from '../../../core/user.service';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
    chats$: Observable<any>;

    constructor(private authService: AuthService, private chatService: ChatService, private userService: UserService) {
    }

    ngOnInit() {
        this.chats$ = this.authService.getUser().pipe(
            switchMap((user) => this.chatService.getChats().pipe(
                map((chats) => chats.filter(chat => chat.id.includes(user.uid)))
            ))
        );
    }

    getUserId(chatId: string): any {
        return chatId.replace(environment.chat.oviveId, '');
    }

    getUser(chatId): Observable<User> {
        const userId = chatId.replace(environment.chat.oviveId, '');
        return combineLatest([this.userService.getUser(userId)]).pipe(
            map(([user]) => user)
        );
    }

}
