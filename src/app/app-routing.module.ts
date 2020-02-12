import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToCustomer = () => redirectLoggedInTo(['customer']);

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule),
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: redirectLoggedInToCustomer}
    },
    {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerPageModule),
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: redirectUnauthorizedToLogin}
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
