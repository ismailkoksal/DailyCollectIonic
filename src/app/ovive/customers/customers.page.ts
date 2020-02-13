import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ClientService} from '../../core/client.service';

@Component({
    selector: 'app-customers',
    templateUrl: 'customers.page.html',
    styleUrls: ['customers.page.scss']
})
export class CustomersPage implements OnInit {

    private customers$: Observable<any[]>;

    constructor(private customerService: ClientService) {
    }

    ngOnInit(): void {
        this.customers$ = this.customerService.getCustomers();
    }

}
