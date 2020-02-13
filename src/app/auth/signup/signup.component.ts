import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {equalValueValidator} from '../shared/equal-value.validator';
import {AuthService} from '../../core/auth.service';
import {ToastService} from '../../core/toast.service';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

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
        private toastService: ToastService,
        private router: Router,
        private translateService: TranslateService
    ) {
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

    /**
     * Get confirm password form control
     */
    get confirmPassword(): AbstractControl {
        return this.form.get('confirmPassword');
    }

    get displayName(): AbstractControl {
        return this.form.get('displayName');
    }

    get photoURL(): AbstractControl {
        return this.form.get('photoURL');
    }

    get address(): AbstractControl {
        return this.form.get('address');
    }

    get city(): AbstractControl {
        return this.form.get('city');
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
            password: ['', Validators.required],
            confirmPassword: [''],
            displayName: ['', Validators.required],
            photoURL: [''],
            address: ['', Validators.required],
            city: ['', Validators.required],
        });
        this.confirmPassword.setValidators([Validators.required, equalValueValidator(this.password)]);
    }

    /**
     * On form submit,
     */
    onSubmit(): void {
        this.authService.createUserWithEmailAndPassword(this.email.value, this.password.value)
            .then(userCredential => {
                const user: User = {
                    uid: userCredential.user.uid,
                    email: this.email.value,
                    displayName: this.displayName.value,
                    photoURL: this.photoURL.value,
                    address: this.address.value,
                    city: this.city.value
                };
                this.authService.addUserData(user).then(
                    () => this.toastService.presentToast(`Bienvenue ${user.displayName}`, 'success')
                );
            })
            .then(() => this.router.navigate(['']))
            .catch(reason => {
                this.translateService.get(reason.code)
                    .subscribe(code => this.toastService.presentToast(code, 'danger'));
            });
    }

}
