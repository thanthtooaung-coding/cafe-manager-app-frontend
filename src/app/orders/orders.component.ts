import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

interface Order {
  id: number;
  customerName: string;
  items: string[];
  total: number;
  status: 'Pending' | 'Preparing' | 'Ready' | 'Delivered';
}

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NgClass],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {
  orders: Order[] = [
    { id: 1, customerName: 'John Doe', items: ['Cappuccino', 'Croissant'], total: 6.00, status: 'Pending' },
    { id: 2, customerName: 'Jane Smith', items: ['Caesar Salad', 'Iced Tea'], total: 12.99, status: 'Preparing' },
    { id: 3, customerName: 'Bob Johnson', items: ['Latte', 'Blueberry Muffin'], total: 7.50, status: 'Ready' },
  ];

  updateStatus(order: Order) {
    const statusOrder: Order['status'][] = ['Pending', 'Preparing', 'Ready', 'Delivered'];
    const currentIndex = statusOrder.indexOf(order.status);
    if (currentIndex < statusOrder.length - 1) {
      order.status = statusOrder[currentIndex + 1];
    }
  }
}
