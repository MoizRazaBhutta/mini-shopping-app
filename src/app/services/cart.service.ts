import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartCount:BehaviorSubject<number>=new BehaviorSubject<number>(0);
  cartCount$=this.cartCount.asObservable();
  cartItems:any[]=[
    
  ];
  constructor() { }

  addToCart(product:Product){
    this.cartCount.next(this.cartItems.length);
  }
}
