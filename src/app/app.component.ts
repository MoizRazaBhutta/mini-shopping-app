import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthGuardService } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cartItemCount$:Observable<number>;
  isLoggedIn$: Observable<boolean>;
  constructor(private cartService: CartService,private router: Router,private authService:AuthGuardService) {}
  ngOnInit() {
    this.cartItemCount$ =this.cartService.cartCount$;
    this.authService.isLoggedIn();
    this.isLoggedIn$ = this.authService.isLoggedInObservable;
  }


  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('products');
    this.cartService.cartCount.next(0); 
    this.authService.isLoggedIn$.next(false);
    this.router.navigate(['/login']); 
  }

}
