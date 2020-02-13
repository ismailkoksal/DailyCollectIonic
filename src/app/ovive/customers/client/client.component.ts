import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ClientService} from '../../../core/client.service';
import {Customer} from '../../../models/customer';


@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {

    private customers$: Observable<Customer[]>;

    constructor(private customerService: ClientService) {
    }

    ngOnInit() {
        this.customers$ = this.customerService.getCustomers();
    }
}
