import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Orders } from '../models/orders';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}
  private apiUrl = 'http://localhost:3000/orders';
  getOrders() {
    return this.http.get<Orders[]>(this.apiUrl);
  }
}
