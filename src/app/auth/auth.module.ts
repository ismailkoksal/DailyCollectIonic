import {NgModule} from '@angular/core';
import {AuthPageRoutingModule} from './auth-routing.module';
import {AuthPage} from './auth.page';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
    imports: [
        AuthPageRoutingModule,
        SharedModule
    ],
    declarations: [AuthPage, SigninComponent, SignupComponent]
})
export class AuthPageModule {
}
