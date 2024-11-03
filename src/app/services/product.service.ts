import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = environment.BASE_URL;
  constructor(private http: HttpClient) { }

  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`).pipe(
      tap(data => console.log(data))
    );
  }
}
