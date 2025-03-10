import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/orders';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'https://dummyjson.com/carts';
  getOrders() {
    return this.http
      .get<{ carts: Order[] }>(this.apiUrl)
      .pipe(map((res) => res.carts))
  }
}
