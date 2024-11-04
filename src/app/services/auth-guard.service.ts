import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem('username') && localStorage.getItem('email')) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
  isLoggedIn() {
    if(localStorage.getItem('username') && localStorage.getItem('email')) {
      return true;
    }
    return false;
  }
}
