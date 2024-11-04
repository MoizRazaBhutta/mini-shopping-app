import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.BASE_URL;
  constructor(private http: HttpClient) { }
  private products : Product[] = [];

  getAllProducts():Observable<Product[]> {
    if (this.getStoredProducts()) {
      this.products = this.getStoredProducts();
      return of(this.products);
    }
    return this.http.get<Product[]>(`${this.baseUrl}/products`).pipe(
      tap(data => this.storeProducts(data))
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, product);
  }

  private storeProducts(products: Product[]): void {
    localStorage.setItem('products', JSON.stringify(products));
  }

  private getStoredProducts(): Product[] | null {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : null;
  }
}
