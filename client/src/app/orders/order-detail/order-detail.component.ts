import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/shared/models/order';
import { OrdersService } from '../orders.service';
import { BreadcrumbService } from 'xng-breadcrumb';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  order?: Order;

  constructor(private activatedRoute: ActivatedRoute,
    private orderService: OrdersService,
    private bcService: BreadcrumbService) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    id && this.orderService.getOrderDetails(+id).subscribe({
      next: order => {
        this.order = order;
        this.bcService.set('@OrderDetail', `Order# ${order.id} - ${order.status}`);
      }
    });
  }

}
