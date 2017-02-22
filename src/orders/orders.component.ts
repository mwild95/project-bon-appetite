import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';

import { User } from '../user/user';
import { Restaurant } from '../classes/Restaurant';
import { UserService } from '../services/user.service';
import { RestaurantsService } from '../services/restaurants.service';
import { CacheService } from '../services/cache.service';


@Component({
  templateUrl: './src/orders/orders.template.html',
  styles: [':host{ display: flex;}'],
  styleUrls: ['./app/orders/orders.css']
})

export class OrdersComponent { 
	
	constructor( private cache: CacheService, private router : Router, private restaurantsService: RestaurantsService, private route : ActivatedRoute, ) {

	}

	navTo(path: string){
		this.router.navigateByUrl("/orders/" + this.route.snapshot.params.restaurantId+ "/" + path);
		//this.router.navigate(['/orders', this.route.snapshot.parent.params['restaurantId']]);
	}

}

