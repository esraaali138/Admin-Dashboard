import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { LoaderService } from '../../../../core/services/loader.service';
import { Order } from '../../models/orders';
@Component({
  selector: 'app-recent-orders',
  templateUrl: './recent-orders.component.html',
  styleUrl: './recent-orders.component.css',
  standalone: false,
})
export class RecentOrdersComponent {
  recentOrders: Order[] = [];

  constructor(
    private orderService: OrdersService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loaderService.show();

    this.orderService.getOrders().subscribe({
      next: (orders) => {
        // this.recentOrders = orders
        //   .sort(
        //     (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        //   )
        //   .slice(0, 5);
        this.loaderService.hide();
      },
      error: (err) => {
        this.loaderService.hide();
      },
    });
  }
}
