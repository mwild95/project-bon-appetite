import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Order } from '../../classes/Order';
import { OrdersService } from '../../services/orders.service';
import { OrderStatus } from '../../classes/OrderStatus'

import { CacheService } from '../../services/cache.service';

import { ModalComponent } from '../../modal/modal.module';

import {Observable} from 'rxjs/Rx';

declare var moment:any;

@Component({
  templateUrl: './src/orders/pending/pending.template.html',
  styleUrls: ['./app/orders/orders.css']
})

export class PendingOrdersComponent { 

	private restaurantId: string;
	private orders: Order[];
	private Math : Math;
	private today : Date = new Date();
	private moment = moment;
	constructor ( private route : ActivatedRoute, private cache : CacheService, private router : Router, private OrdersService: OrdersService ) {

	}

	ngOnInit () {
		this.restaurantId = this.route.snapshot.parent.params['restaurantId'];

		this.OrdersService.getPendingOrders( this.restaurantId ).then(
			(response) => {
				this.orders = response;
			},
			err => { alert(err); }
		);

		let timer = Observable.timer(1000,1000);
    	timer.subscribe(t =>  this.today = new Date());
	}

	changeStatus( statusNo : number, order : Order ) {
		order.setStatus( OrderStatus[statusNo] );
		this.OrdersService.updateOrder( order ).then(
			(response) => {
				console.log(response);
				//TODO need to find it in the array of orders and update it
			},
			err => {alert(err);}
		) ;
	}

	refreshOrders ( ) {
		this.OrdersService.getOrders( this.restaurantId, OrderStatus[0] ).then(
			(response) => {
				this.orders = response;
			},
			err => { alert(err); }
		);
	}
}
