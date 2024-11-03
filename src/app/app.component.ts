import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cartItemCount = 0;
  constructor(private cartService: CartService,private router: Router) {}
  ngOnInit() {
    this.cartService.cartCount$.subscribe((count) => {
      this.cartItemCount = count
    })
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    // localStorage.removeItem('cartItemCount');
    this.cartService.cartCount.next(0); 
    this.router.navigate(['/login']); 
  }

}
