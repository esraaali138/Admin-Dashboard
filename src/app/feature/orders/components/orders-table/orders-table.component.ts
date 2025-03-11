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
  currentPage: number = 1;
  itemsPerPage: number = 5;
  paginatedOrders: Order[] = [];

  constructor(private orderService: OrdersService) {}

  ngOnInit() {
    this.orderService.getOrders().subscribe((orders) => {
      this.orders = orders.map((order) => ({
        ...order,
        products: order.products.map((product  , index) => ({
          ...product,
          status: this.getRandomStatus(),
          date: this.generateRandomDate(index),
        })),
      }));

      this.updatePagination();
    });
  }

  generateRandomDate(index : number): string {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - index)
    return currentDate.toISOString().split('T')[0];
  }

  getRandomStatus(): string {
    const statuses = ['Pending', 'Approved', 'In Process', 'Cancelled'];
    return statuses[Math.floor(Math.random() * statuses.length)];
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.updatePagination();
  }

  updatePagination(): void {
    const startOrder = (this.currentPage - 1) * this.itemsPerPage;
    const endOrder = startOrder + this.itemsPerPage;
    this.paginatedOrders = this.orders.slice(startOrder, endOrder);
  }
}
