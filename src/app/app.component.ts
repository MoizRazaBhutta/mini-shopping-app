import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cartItemCount = 0;
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService.cartCount$.subscribe((count) => {
      this.cartItemCount = count
    })
  }
}
