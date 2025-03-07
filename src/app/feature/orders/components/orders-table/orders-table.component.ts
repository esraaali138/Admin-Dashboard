import { Component, Input, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Orders } from '../../models/orders';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrl: './orders-table.component.css',
  standalone: false,
})
export class OrdersTableComponent {
  @Input() orders!: Orders[];
}
