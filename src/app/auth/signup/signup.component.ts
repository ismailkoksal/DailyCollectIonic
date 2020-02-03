import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {equalValueValidator} from '../shared/equal-value.validator';
import {AuthService} from '../../core/auth.service';
import {ToastService} from '../../core/toast.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
    form: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private toastService: ToastService) {
    }

    get email() {
        return this.form.get('email');
    }

    get password() {
        return this.form.get('password');
    }

    get confirmPassword() {
        return this.form.get('confirmPassword');
    }

    ngOnInit() {
        this.buildForm();
    }

    buildForm(): void {
        this.form = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            confirmPassword: ['']
        });
        this.confirmPassword.setValidators([Validators.required, equalValueValidator(this.password)]);
    }

    onSubmit(): void {
        this.authService.createUserWithEmailAndPassword(this.email.value, this.password.value)
            .then(value => console.log(value))
            .catch(reason => this.toastService.presentToast(reason.code, 'danger'));
    }

}
