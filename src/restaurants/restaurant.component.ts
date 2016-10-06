import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CacheService } from '../services/cache.service';
import { MenuService } from '../services/menu.service';
import { RestaurantsService } from '../services/restaurants.service';

import { Restaurant } from '../classes/Restaurant';
import { Menu } from '../classes/Menu';

import { ModalComponent } from '../modal/modal.module';


declare var $:any;

@Component({
  templateUrl: './src/restaurants/restaurant.template.html'
})

export class RestaurantComponent { 

	restaurant : Restaurant;
	originalRestaurant : Restaurant;

	availableMenus : Menu[];
	currentlySelectedMenu: Menu;

	@ViewChild('menuPickerModal')
	menuPickerModal: ModalComponent;

	@ViewChild('deleteRestaurantModal')
	deleteRestaurantModal: ModalComponent;
	
	constructor ( private route : ActivatedRoute, private cache : CacheService, private router : Router, private MenuService : MenuService, private RestaurantsService: RestaurantsService ) {

	}

	ngOnInit () {
		let id = this.route.snapshot.params['restaurantId'];
		this.restaurant = $.extend({}, this.cache.get( id ) );
		//this.restaurant = new Restaurant( this.originalRestaurant.getId(), this.originalRestaurant.getName() );
		this.currentlySelectedMenu = this.restaurant.getMenu();
		//TODO need to check for undefined and redirect to error page 

		this.availableMenus = this.MenuService.getMenus();
	}

	onSubmit () {
		//this.restaurant holds the edited values
		//restaurants.service.update??
		this.saveChanges();
		this.onFinish();
	}

	onCancel () {
		if( confirm ("Are you sure you want to cancel?") ){
			this.onFinish();
		} else {

		}
	}

	saveChanges () {
		this.RestaurantsService.updateRestaurant(this.restaurant);
		alert("Changes not saved (Rest needs to be implemented)");
	}

	onFinish () {
		this.router.navigate(['/manage/restaurants']);
	}


	//Menu modal dialog functions ///////////////////
	openMenuPickerModal () {
		this.menuPickerModal.open();
	}

	selectMenu (value:Menu) {
		if( typeof this.currentlySelectedMenu == 'undefined' || this.currentlySelectedMenu.toString() == "undefined" ) {
			this.currentlySelectedMenu = undefined;
		}
		
		this.restaurant.setMenu( this.currentlySelectedMenu );
		this.menuPickerModal.close();
	}
	/////////////////////////////////////////////////

	//Delete Restaurant modal stuff//////////////////
	confirmDelete ( ) {
		this.deleteRestaurantModal.open();
	}

	deleteRestaurant ( ) {
		this.RestaurantsService.deleteRestaurant( this.restaurant.getId() );
		this.onFinish();
	}
	/////////////////////////////////////////////////

}
