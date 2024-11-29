import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    { id: 1, name: 'Cappuccino', price: 3.5, category: 'Coffee' },
    { id: 2, name: 'Croissant', price: 2.5, category: 'Pastry' },
    { id: 3, name: 'Caesar Salad', price: 8.99, category: 'Salad' },
  ];

  newItem: MenuItem = { id: 0, name: '', price: 0, category: '' };

  addItem() {
    if (this.newItem.name && this.newItem.price && this.newItem.category) {
      this.newItem.id = this.menuItems.length + 1;
      this.menuItems.push({...this.newItem});
      this.newItem = { id: 0, name: '', price: 0, category: '' };
    }
  }

  deleteItem(id: number) {
    this.menuItems = this.menuItems.filter(item => item.id !== id);
  }
}
