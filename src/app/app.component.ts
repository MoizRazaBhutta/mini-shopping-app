import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './services/auth-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cartItemCount$:Observable<number>;
  isLoggedIn: boolean = false;
  constructor(private cartService: CartService,private router: Router,private authService:AuthGuardService) {}
  ngOnInit() {
    this.cartItemCount$ =this.cartService.cartCount$;
    this.isLoggedIn = this.authService.isLoggedIn();
  }


  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    localStorage.removeItem('products');
    // localStorage.removeItem('cartItemCount');
    this.cartService.cartCount.next(0); 
    this.router.navigate(['/login']); 
  }

}
