import { Component, Input } from '@angular/core';
import { Order } from '../../models/orders';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.css',
  standalone: false,
})
export class OrdersTableComponent {
  data: string = '';
  @Input() orders!: Order[];

  constructor(private orderService: OrdersService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe((orders) => {
      console.log('orders', orders);
      this.orders = orders.map((order) => ({
        ...order,
        products: order.products.map((product) => ({
          ...product,
          status: this.getRandomStatus(),
          data: this.generateRandomDate(),
        })),
      }));
    });
  }

  generateRandomDate(): string {
    const currentDate = new Date().getTime();
    const prevDate = new Date(2023, 2, 12).getTime();
    const randomDate = new Date(
      prevDate + Math.random() * (prevDate - currentDate)
    );
    return randomDate.toISOString().split('T')[0];
  }

  getRandomStatus(): string {
    const statuses = ['Pending', 'Approved', 'In Process', 'Cancelled'];
    return statuses[Math.floor(Math.random() * statuses.length)];
  }
}
