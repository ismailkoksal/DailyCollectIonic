import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ClientService} from '../core/client.service';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

    private customers$: Observable<any[]>;

    constructor(private customerService: ClientService) {
    }

    ngOnInit(): void {
        this.customers$ = this.customerService.getCustomers();
    }

}
