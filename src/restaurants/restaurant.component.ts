import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CacheService} from '../services/cache.service';

import { Restaurant } from '../classes/Restaurant';

@Component({
  templateUrl: './src/restaurants/restaurant.template.html'
})

export class RestaurantComponent { 

	restaurant : Restaurant;
	
	constructor ( private route : ActivatedRoute, private cache : CacheService, private router : Router ) {

	}

	ngOnInit () {
		let id = this.route.snapshot.params['restaurantId'];
		this.restaurant = this.cache.get( id );

		//TODO need to check for undefined and redirect to error page 
	}

	onSubmit () {
		//this.restaurant holds the edited values
		//restaurants.service.update??
		alert("Changes not saved (Rest needs to be implemented)");
		this.router.navigate(['/manage/restaurants']);
	}

}
