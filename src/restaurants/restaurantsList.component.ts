import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Restaurant } from '../classes/Restaurant';
import { RestaurantsService } from '../services/restaurants.service';

import { CacheService } from '../services/cache.service';

@Component({
  templateUrl: './src/restaurants/restaurantsList.template.html'
})

export class RestaurantsListComponent { 
	
	restaurants : Restaurant[];


	constructor ( private restaurantsService : RestaurantsService, private cache : CacheService, private router : Router ) {

	}

	ngOnInit () {
		this.restaurants = this.restaurantsService.getRestaurants();
	}

	selectRestaurant ( restaurant : Restaurant ) {
		this.cache.put( restaurant.getId(), restaurant );
		this.router.navigate(['/manage/restaurants', restaurant.getId()]);
	}
}
