import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CacheService } from '../services/cache.service';
import { MenuService } from '../services/menu.service';
import { RestaurantsService } from '../services/restaurants.service';

import { Restaurant } from '../classes/Restaurant';
import { Menu } from '../classes/Menu';
import { OpeningTimes } from '../classes/OpeningTimes';
import { Table } from '../classes/Table';

import { ModalComponent } from '../modal/modal.module';


declare var $:any;

@Component({
  templateUrl: './src/restaurants/restaurant.template.html'
})

export class RestaurantComponent { 

	restaurant : Restaurant = new Restaurant({'_id':"1", 'name':"Loading"});
	originalRestaurant : Restaurant;

	availableMenus : Menu[];
	currentlySelectedMenu: Menu;

	openingTimeToAdd = new OpeningTimes({days:[], open: "10:00", close: "22:00"});

	@ViewChild('menuPickerModal')
	menuPickerModal: ModalComponent;

	@ViewChild('deleteRestaurantModal')
	deleteRestaurantModal: ModalComponent;

	@ViewChild('addOpeningTimeModal')
	addOpeningTimeModal :ModalComponent;

	@ViewChild('addTableModal')
	addTableModal : ModalComponent;
	
	constructor ( private route : ActivatedRoute, private cache : CacheService, private router : Router, private MenuService : MenuService, private RestaurantsService: RestaurantsService ) {
	}

	ngOnInit () {
		let id = this.route.snapshot.params['restaurantId'];
		if( this.cache.get( id )){
			this.restaurant = $.extend({}, this.cache.get( id ) );
			this.currentlySelectedMenu = this.restaurant.getMenu();
		} else {
			this.RestaurantsService.getRestaurant( id ).then(
				(response : Restaurant ) => {
					this.restaurant = response;
					//this.restaurant = new Restaurant( this.originalRestaurant.getId(), this.originalRestaurant.getName() );
					this.currentlySelectedMenu = this.restaurant.getMenu();
					//TODO need to check for undefined and redirect to error page 
				},
				err => {
					alert(err.message);
				}
			);
		}
		
		

		this.MenuService.getMenus().then(
			( response ) => { this.availableMenus = response; },
			( err ) => { alert(err.message); }
		);
	}

	onSubmit () {

		if(!this.restaurant.getMenu()) {
			this.restaurant.setMenu(null);
		}
		//this.restaurant holds the edited values
		//restaurants.service.update??
		this.RestaurantsService.updateRestaurant(this.restaurant).then(
			( response ) => { this.onFinish(); },
			err => { alert(err.message); }
		);
		
	}

	onCancel () {
		if( confirm ("Are you sure you want to cancel?") ){
			this.onFinish();
		} else {

		}
	}

	saveChanges () : Promise<Restaurant> {
		return this.RestaurantsService.updateRestaurant(this.restaurant);
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
		this.RestaurantsService.deleteRestaurant( this.restaurant.getId() ).then(
			( response ) => { this.onFinish(); },
			err => { alert(err.message); }
		);
		
	}
	/////////////////////////////////////////////////


	///// Opening Times//////////////
	addOpeningTime ( ) {
		this.restaurant.addOpeningTime(this.openingTimeToAdd);
		this.openingTimeToAdd = new OpeningTimes({days:[], open: "10:00", close: "22:00"});
		this.addOpeningTimeModal.close();
	}

	removeOpeningTime ( index : number ) {
		this.restaurant.setOpeningTimes(<OpeningTimes[]>this.restaurant.getOpeningTimes().splice(index, 1));
	}

	createNewTable ( newTableName: string) {
		let newTable: Table;
		this.RestaurantsService.createTable( newTableName, this.restaurant.getId() ).then(
			result => {
				if ( typeof result != 'undefined' ){
					this.addTableModal.close();
					this.restaurant.addTable( new Table(result) );
				}
			},
			err => {
				alert(err.message);
			}
		);
	}
}
