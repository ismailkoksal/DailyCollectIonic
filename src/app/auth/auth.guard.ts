import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {switchMap, take} from 'rxjs/operators';
import {AngularFireAuth} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AngularFireAuth, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.auth.user.pipe(
        take(1),
        switchMap(async authState => {
          if (authState) {
            const token = await authState.getIdTokenResult();
            if (token.claims.ovive) {
              await this.router.navigate(['ovive']);
            }
            if (token.claims.rider) {
              await this.router.navigate(['rider']);
            }
            if (token.claims.customer) {
              await this.router.navigate(['customer']);
            }
            return false;
          } else {
            return true;
          }
        })
    );
  }

}
