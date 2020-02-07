import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {Collect} from '../../models/collect';
import {CollectService} from '../../core/collect.service';
import {ModalController} from '@ionic/angular';

@Component({
    selector: 'app-add-collect',
    templateUrl: './add-collect.component.html',
    styleUrls: ['./add-collect.component.scss'],
})
export class AddCollectComponent implements OnInit {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private collectService: CollectService,
        private modalController: ModalController
    ) {
    }

    get date(): AbstractControl {
        return this.form.get('date');
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm(): void {
        this.form = this.fb.group({
            date: [''],
            time: [''],
            location: [''],
            type: [''],
            kg: [0]
        });
    }

    onSubmit() {
        const collect: Collect = {
            date: this.date.value
        };
        this.collectService.addCollect(collect).subscribe(
            () => this.dismiss()
        );
    }

    dismiss(): void {
        this.modalController.dismiss();
    }

}
