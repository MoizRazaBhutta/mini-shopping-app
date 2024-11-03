import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartCount:Subject<number>=new Subject<number>();
  cartCount$=this.cartCount.asObservable();
  cartItems:any[]=[
    
  ];
  constructor() { }

  addToCart(){
    this.cartCount.next(this.cartItems.length);
  }
}
