import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {Collect} from '../../models/collect';
import {CollectService} from '../../core/collect.service';
import {ModalController} from '@ionic/angular';
import {DatePipe} from '@angular/common';

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
        private modalController: ModalController,
        private datePipe: DatePipe
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
            date: [this.datePipe.transform(Date.now(), 'yyyy-MM-ddTHH:mm:ss')]
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
