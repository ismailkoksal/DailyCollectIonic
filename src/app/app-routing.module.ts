import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AngularFireAuthGuard, hasCustomClaim, redirectLoggedInTo} from '@angular/fire/auth-guard';
import {AuthGuard} from './auth/auth.guard';

const customerOnly = () => hasCustomClaim('customer');
const oviveOnly = () => hasCustomClaim('ovive');
const riderOnly = () => hasCustomClaim('rider');
const redirectLoggedIn = () => redirectLoggedInTo(hasCustomClaim('ovive') ? ['ovive'] : ['customer']);

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule),
        canActivate: [AuthGuard],
        runGuardsAndResolvers: 'always'
    },
    {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module').then(m => m.CustomerPageModule),
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: customerOnly}
    },
    {
        path: 'ovive',
        loadChildren: () => import('./ovive/ovive.module').then(m => m.OvivePageModule),
        canActivate: [AngularFireAuthGuard],
        data: {authGuardPipe: oviveOnly}
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
