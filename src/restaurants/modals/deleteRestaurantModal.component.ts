import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdDialogRef } from '@angular/material';

import { CacheService } from '../../services/cache.service';
import { RestaurantsService } from '../../services/restaurants.service'


import { Restaurant } from '../../classes/Restaurant';
import { Menu } from '../../classes/Menu';

@Component({
   templateUrl: './src/restaurants/modals/deleteModal.template.html',
})

export class DeleteRestaurantModalComponent { 

	private toDelete : Restaurant;

	constructor ( private cacheService: CacheService, public dialogRef: MdDialogRef<DeleteRestaurantModalComponent>, private restaurantsService: RestaurantsService ) {
		this.toDelete = this.cacheService.get('restaurantDeleteModalData');
	}


	submit ( ) {
		//this.dialogRef.close(this.currentlySelectedMenu);
		this.restaurantsService.deleteRestaurant( this.toDelete.getId() ).then(
			( response ) => { this.dialogRef.close(true) },
			err => { this.dialogRef.close(err) }
		);
	}

	close( ) {
		this.dialogRef.close(false)
	}

}
