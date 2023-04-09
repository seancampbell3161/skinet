import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: OrdersComponent },
  { path: ':id', component: OrderDetailComponent, data: {breadcrumb: {alias: 'orderDetail'}} },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrdersRoutingModule { }
