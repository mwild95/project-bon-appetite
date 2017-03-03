import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Order } from '../../classes/Order';
import { OrdersService } from '../../services/orders.service';
import { OrderStatus } from '../../classes/OrderStatus'

import { CacheService } from '../../services/cache.service';
import { ActivityService } from '../../services/activity.service';

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

	private observable : Observable;

	constructor ( private route : ActivatedRoute, private cache : CacheService, private router : Router, private OrdersService: OrdersService,
	private activityService: ActivityService ) {

	}

	ngOnInit () {
		this.restaurantId = this.route.snapshot.parent.params['restaurantId'];

		this.OrdersService.getPendingOrders( this.restaurantId ).then(
			(response) => {
				this.orders = response;
				/*this.initializePolling().subscribe(
					(observe) => {
						this.orders = observe;
					}
				);*/
			},
			err => { alert(err); }
		);

		let timer = Observable.timer(1000,1000);
    	timer.subscribe(t =>  this.today = new Date());

    	/*this.observable = this.initializePolling().subscribe(
    		(observe) =>{
    			this.orders = observe;
    		}
    	);*/
	}

	initializePolling() {
		return Observable
    		 .interval(30000)
     		.flatMap(() => {
       			return this.OrdersService.getPendingOrders( this.restaurantId );
     		});
	}

	changeStatus( event: Event, order : Order ) {
		this.activityService.isLoading();
		order.setStatus( event.value );
		this.OrdersService.updateOrder( order ).then(
			(response) => {
				this.refreshOrders();
				this.activityService.isFinished("Order status updated!");
				//TODO need to find it in the array of orders and update it
			},
			err => {alert(err);this.activityService.isFinished();}
		) ;
	}

	refreshOrders ( ) {
		this.OrdersService.getPendingOrders( this.restaurantId ).then(
			(response) => {
				this.orders = response;
				/*this.initializePolling().subscribe(
					(observe) => {
						this.orders = observe;
					}
				);*/
			},
			err => { alert(err); }
		);
	}
}
