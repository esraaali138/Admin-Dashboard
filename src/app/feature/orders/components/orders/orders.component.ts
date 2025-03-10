import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../models/orders';
import { LoaderService } from '../../../../core/services/loader.service';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {
  constructor(
    private orderService: OrdersService,
    private loaderService: LoaderService
  ) {}
  // orders!: Orders[];
  orders :any
  ngOnInit(): void {
    this.loaderService.show();
    this.orderService.getOrders().subscribe({
      next: (orders) => {
        this.orders = orders
        console.log('orders', orders)

        // this.orders = orders.sort(
        //   (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        // );
        this.loaderService.hide();
      },
      error: () => {
        this.loaderService.hide();
      },
    });
  }
}

