import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Order } from '../../classes/Order';
import { OrdersService } from '../../services/orders.service';

import { CacheService } from '../../services/cache.service';

import { ModalComponent } from '../../modal/modal.module';

@Component({
  templateUrl: './src/orders/pending/pending.template.html',
  styleUrls: ['./app/restaurants/restaurant.css']
})

export class PendingOrdersComponent { 

	private restaurantId: string;
	private orders: Order[];

	constructor ( private route : ActivatedRoute, private cache : CacheService, private router : Router, private OrdersService: OrdersService ) {

	}

	ngOnInit () {
		this.restaurantId = this.route.snapshot.parent.params['restaurantId'];

		this.OrdersService.getOrders( this.restaurantId ).then(
			(response) => {
				this.orders = response;
			},
			err => { alert(err); }
		);
	}
}
