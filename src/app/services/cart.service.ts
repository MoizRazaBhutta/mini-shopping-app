import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartCount:BehaviorSubject<number>=new BehaviorSubject<number>(0);
  cartItems:BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  cartItems$ = this.cartItems.asObservable();
  cartCount$ = this.cartCount.asObservable();
  constructor() { }

  addToCart(product:Product){
    const currentItems = this.cartItems.getValue();
    currentItems.push(product);
    this.cartItems.next(currentItems);
    this.cartCount.next(currentItems.length);
  }

  clearCart() {
    this.cartItems.next([]); 
    this.cartCount.next(0); 
  }

  getCartItems(): Product[] {
    return this.cartItems.getValue(); 
  }
}
