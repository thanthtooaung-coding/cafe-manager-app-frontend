import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { OrdersComponent } from './orders/orders.component';
import { StaffComponent } from './staff/staff.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'menu', component: MenuComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'staff', component: StaffComponent },
    { path: '**', redirectTo: '' }
];
