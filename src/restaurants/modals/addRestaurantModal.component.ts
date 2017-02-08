import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdDialogRef } from '@angular/material';

import { RestaurantsService } from '../../services/restaurants.service';

import { Restaurant } from '../../classes/Restaurant';



declare var $:any;

@Component({
   templateUrl: './src/restaurants/modals/addRestaurantModal.template.html',
})

export class AddRestaurantModalComponent { 

	private newRestaurantName : string;

	constructor ( private restaurantsService: RestaurantsService, public dialogRef: MdDialogRef<AddRestaurantModalComponent> ) {
	}


	submit ( ) {
		this.restaurantsService.createRestaurant( this.newRestaurantName).then(
			result => {
				if ( typeof result != 'undefined' ){
					this.dialogRef.close(result);
				}
			},
			err => {
				alert(err.message);
				this.dialogRef.close(undefined);
			}
		);
	}

	close( ) {
		this.dialogRef.close(undefined);
	}

	isValid () {
		return true;
	}
}
