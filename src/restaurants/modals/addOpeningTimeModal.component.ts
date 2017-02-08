import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdDialogRef } from '@angular/material';

import { CacheService } from '../../services/cache.service';


import { OpeningTimes } from '../../classes/OpeningTimes';
import { Menu } from '../../classes/Menu';

@Component({
   templateUrl: './src/restaurants/modals/addOpeningTimeModal.template.html',
})

export class AddOpeningTimeModalComponent { 

	private openingTime : OpeningTimes;

	constructor ( private cacheService: CacheService, public dialogRef: MdDialogRef<AddOpeningTimeModalComponent> ) {
		this.openingTime = new OpeningTimes({days:[], open: "10:00", close: "22:00"});
	}


	submit ( ) {
		this.dialogRef.close(this.openingTime);
	}

	close( ) {
		this.dialogRef.close(false);
	}

}
