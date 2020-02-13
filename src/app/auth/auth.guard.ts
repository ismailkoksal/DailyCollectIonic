import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AngularFireAuth, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.user.pipe(
        switchMap(async authState => {
          if (authState) {
            const token = await authState.getIdTokenResult(true);
            console.log(token.claims);
            if (token.claims.ovive) {
              this.router.navigate(['ovive']);
            }
            if (token.claims.rider) {
              this.router.navigate(['rider']);
            }
            if (token.claims.customer) {
              this.router.navigate(['customer']);
            }
            return false;
          } else {
            return true;
          }
        })
    );
  }

}
