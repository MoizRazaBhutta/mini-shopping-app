import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems$: Observable<Product[]>;
  showPopup: boolean = false;
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems$ = this.cartService.cartItems$;
  }

  checkout(): void {
    this.showPopup = true;
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
  closePopup(): void {
    this.showPopup = false;
    this.cartService.clearCart();
    this.router.navigate(['/']);
  }

  getTotal(cartItems: Product[]): number {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }
}
