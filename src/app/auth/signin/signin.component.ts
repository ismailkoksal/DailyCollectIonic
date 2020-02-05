import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../core/auth.service';
import {ToastService} from '../../core/toast.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private toastService: ToastService,
        private translate: TranslateService
    ) {
        translate.setDefaultLang('fr');
    }

    /**
     * Get email form control
     */
    get email(): AbstractControl {
        return this.form.get('email');
    }

    /**
     * Get password form control
     */
    get password(): AbstractControl {
        return this.form.get('password');
    }

    ngOnInit() {
        this.buildForm();
    }

    /**
     * Init form
     */
    buildForm(): void {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required]
        });
    }

    /**
     * On form submit, sign in user
     */
    onSubmit(): void {
        this.authService.signInWithEmailAndPassword(this.email.value, this.password.value)
            .then(value => console.log(value))
            .catch(reason => this.toastService.presentToast(reason.code, 'danger'));
    }

}
