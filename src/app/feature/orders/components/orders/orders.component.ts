import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Orders } from '../../models/orders';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  constructor(private orderService: OrdersService) {}
  orders!: Orders[];
  ngOnInit(): void {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    });
  }
}
