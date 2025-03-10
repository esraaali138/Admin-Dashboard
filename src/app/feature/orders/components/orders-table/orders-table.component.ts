import { Component, Input, OnInit } from '@angular/core';
import { Order } from '../../models/orders';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.css',
  standalone: false,
})
export class OrdersTableComponent {
  data: string = '';
  @Input() orders!: Order[];
  getRandomDate() {
  return  this.data = new Date().toISOString().split('T')[0];
  }
}
