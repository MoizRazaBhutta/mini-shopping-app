import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedInObservable = this.isLoggedIn$.asObservable();
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
      this.isLoggedIn$.next(true);
    }
    else{
      this.isLoggedIn$.next(false);
    }
  }
}
