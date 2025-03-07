import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Orders } from '../../models/orders';

@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrl: './recent-orders.component.css',
  standalone: false,
})
export class RecentOrdersComponent {
  recentOrders: Orders[] = [];

  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((orders) => {
      this.recentOrders = orders
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 5);
    });
  }
}
