import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartCount:BehaviorSubject<number>=new BehaviorSubject<number>(0);
  cartCount$=this.cartCount.asObservable();
  cartItems:any[]=[
    
  ];
  constructor() { }

  addToCart(){
    this.cartCount.next(this.cartItems.length);
  }
}
