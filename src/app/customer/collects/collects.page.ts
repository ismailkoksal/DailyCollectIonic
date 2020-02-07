import {Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddCollectComponent} from '../add-collect/add-collect.component';
import {Observable} from 'rxjs';
import {Collect} from '../../models/collect';
import {CollectService} from '../../core/collect.service';
import {AuthService} from '../../core/auth.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-collects',
    templateUrl: './collects.page.html',
    styleUrls: ['./collects.page.scss'],
})
export class CollectsPage implements OnInit {
    collects$: Observable<Collect[]>;

    constructor(
        private collectService: CollectService,
        private authService: AuthService,
        private modalController: ModalController,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.collects$ = this.collectService.getCollects();
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: AddCollectComponent,
            cssClass: 'modal'
        });
        return await modal.present();
    }

    signOut(): void {
        this.authService.signOut()
            .then(() => this.router.navigate(['']));
    }

}
