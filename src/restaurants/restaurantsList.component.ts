import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Restaurant } from '../classes/Restaurant';
import { RestaurantsService } from '../services/restaurants.service';

import { CacheService } from '../services/cache.service';

import { ModalComponent } from '../modal/modal.module';

@Component({
  templateUrl: './src/restaurants/restaurantsList.template.html'
})

export class RestaurantsListComponent { 
	
	restaurants : Restaurant[];

	@ViewChild('newRestaurantModal')
	newRestaurantModal: ModalComponent;

	constructor ( private restaurantsService : RestaurantsService, private cache : CacheService, private router : Router ) {

	}

	ngOnInit () {
		this.restaurants = this.restaurantsService.getRestaurants();
	}

	selectRestaurant ( restaurant : Restaurant ) {
		this.cache.put( restaurant.getId(), restaurant );
		this.router.navigate(['/manage/restaurants', restaurant.getId()]);
	}


//////////add restaurant modal stuff//////////
	addNewRestaurant ( ) {
		this.newRestaurantModal.open();
	}

	createNewRestaurant ( newRestName: string) {
		let newRestaurant: Restaurant = this.restaurantsService.createRestaurant( newRestName );
		this.selectRestaurant ( newRestaurant );
	}
	///////////////////////////////////////////
}