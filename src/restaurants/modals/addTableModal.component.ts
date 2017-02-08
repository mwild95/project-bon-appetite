import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdDialogRef } from '@angular/material';

import { CacheService } from '../../services/cache.service';
import { RestaurantsService } from '../../services/restaurants.service';
import { ErrorService } from '../../services/error.service';

import { Restaurant } from '../../classes/Restaurant';
import { Table } from '../../classes/Table';

@Component({
   templateUrl: './src/restaurants/modals/addTableModal.template.html',
})

export class AddTableModalComponent { 

	private tableName : string;
	private restaurantId : string;

	constructor (public dialogRef: MdDialogRef<AddTableModalComponent>, private restaurantsService : RestaurantsService, private cacheService: CacheService, private errorService: ErrorService ) {
		this.restaurantId = this.cacheService.get("tableModalData");
	}


	submit ( ) {
		this.restaurantsService.createTable( this.tableName, this.restaurantId ).then(
			result => {
				if ( typeof result != 'undefined' ){
					this.dialogRef.close( new Table(result) );
				}
			},
			err => {
				this.errorService.showError(err);
				this.dialogRef.close(false);
			}
		);
	}

	close( ) {
		this.dialogRef.close(false);
	}

}
