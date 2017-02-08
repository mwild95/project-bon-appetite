import { Component, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdDialogRef } from '@angular/material';

import { CacheService } from '../../services/cache.service';


import { Restaurant } from '../../classes/Restaurant';
import { Menu } from '../../classes/Menu';

@Component({
   templateUrl: './src/restaurants/modals/menuPickerModal.template.html',
})

export class MenuPickerModalComponent { 

	private menus : Menu[];
	private currentlySelectedMenu : Menu;

	constructor ( private cacheService: CacheService, public dialogRef: MdDialogRef<MenuPickerModalComponent> ) {
		this.menus = this.cacheService.get('menuPickerModalData').menus;
		this.currentlySelectedMenu = this.cacheService.get('menuPickerModalData').current;
	}


	submit ( ) {
		this.dialogRef.close(this.currentlySelectedMenu);
	}

	close( ) {
		this.dialogRef.close(this.currentlySelectedMenu);
	}

}
