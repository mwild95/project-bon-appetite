import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { User } from '../user/user';
import { Restaurant } from '../classes/Restaurant';
import { UserService } from '../services/user.service';
import { RestaurantsService } from '../services/restaurants.service';
import { CacheService } from '../services/cache.service';

@Component({
  templateUrl: './src/orders/ordersRestaurant.template.html',
  styles: [':host{ display: flex;}'],
  styleUrls: ['./app/orders/orders.css']
})

export class OrdersRestaurantComponent { 

	restaurants : Restaurant[];
	
	constructor( private router : Router, private restaurantsService: RestaurantsService, private cache: CacheService ) {

	}

	ngOnInit () {

		this.restaurantsService.getRestaurants(  ).then(
			result => {
				if ( typeof result != 'undefined' ) {
					this.restaurants = <Restaurant[]>result;
				}
			},
			err => {
				alert(err.message);
				//DEAL WITH ERROR
			}
		);

	}

	navRestaurantOrders ( restaurant: Restaurant ) {
		this.cache.put( restaurant.getId(), restaurant );
		this.router.navigate(['/orders', restaurant.getId()]);
	}

}

