import { Component, OnInit } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products$ :Observable<Product[]>;
  constructor(private productService: ProductService,private cartService: CartService) { }

  ngOnInit(): void {
    this.products$ = this.productService.getAllProducts();
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
