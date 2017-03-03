import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MdDialog, MdDialogRef, MdTab } from '@angular/material';

import { CacheService } from '../services/cache.service';
import { MenuService } from '../services/menu.service';
import { RestaurantsService } from '../services/restaurants.service';
import { ImagesService } from '../services/images.service';
import { ErrorService } from '../services/error.service';
import { LocationService} from '../services/location.service';
import { ActivityService } from '../services/activity.service';

import { Restaurant } from '../classes/Restaurant';
import { Menu } from '../classes/Menu';
import { OpeningTimes } from '../classes/OpeningTimes';
import { Table } from '../classes/Table';

import { ModalComponent } from '../modal/modal.module';

import { MenuPickerModalComponent} from './modals/menuPickerModal.component'; 
import { DeleteRestaurantModalComponent } from './modals/deleteRestaurantModal.component';
import { AddOpeningTimeModalComponent } from './modals/addOpeningTimeModal.component';
import { AddTableModalComponent } from './modals/addTableModal.component';



declare var $:any;
declare var google:any;

@Component({
  templateUrl: './src/restaurants/restaurant.template.html',
  styleUrls: ['./app/restaurants/restaurant.css']
})

export class RestaurantComponent { 

	restaurant : Restaurant = new Restaurant({'_id':"1", 'name':"Loading"});
	originalRestaurant : Restaurant;

	availableMenus : Menu[];
	currentlySelectedMenu: Menu;



	@ViewChild('logoImagePicker')
	logoImagePicker: HTMLInputElement;

	@ViewChild('mapView')
	mapView: HTMLDivElement;

	@ViewChild('LocationTab')
	locationTab: MdTab;

	mapElement;
	markerElement;
	
	constructor ( private route : ActivatedRoute, private cache : CacheService, private router : Router, private MenuService : MenuService, private RestaurantsService: RestaurantsService, private imagesService: ImagesService, public dialog : MdDialog, private errorService : ErrorService,
	private locationService: LocationService,
	private activityService: ActivityService ) {
		
	}

	ngOnInit () {
		let id = this.route.snapshot.params['restaurantId'];
		if( this.cache.get( id )){
			this.restaurant = $.extend({}, this.cache.get( id ) );
			this.currentlySelectedMenu = this.restaurant.getMenu();
			this.initMap();
		} else {
			this.RestaurantsService.getRestaurant( id ).then(
				(response : Restaurant ) => {
					this.restaurant = response;
					//this.restaurant = new Restaurant( this.originalRestaurant.getId(), this.originalRestaurant.getName() );
					this.currentlySelectedMenu = this.restaurant.getMenu();
					//TODO need to check for undefined and redirect to error page 

					this.initMap();
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

	initMap(){
		this.mapElement = new google.maps.Map(this.mapView.nativeElement, {
          zoom: 15,
          center: {lat: -34.397, lng: 150.644}
        });
        
        

        if(typeof this.restaurant.getLocation() != 'undefined'){
        	//we already have a lat and long so we need to plot it on the map
        	let myLatLng = new google.maps.LatLng({lat: this.restaurant.getLocation()[1], lng: this.restaurant.getLocation()[0]}); 
        	this.plotMarker(myLatLng);


        }	

        
	}

	initMapResize(){
		let myLatLng = new google.maps.LatLng({lat: this.restaurant.getLocation()[1], lng: this.restaurant.getLocation()[0]}); 
		//This is being called too soon
		//need to wait til the map is created
		//google.maps.event.addListenerOnce(this.mapElement, 'idle', function() {
   			google.maps.event.trigger(this.mapElement, 'resize');
   			this.mapElement.setCenter(myLatLng);
		//});
	}

	onSubmit () {
		this.activityService.isLoading();
		if(!this.restaurant.getMenu()) {
			this.restaurant.setMenu(null);
		}
		//this.restaurant holds the edited values
		//restaurants.service.update??
		this.RestaurantsService.updateRestaurant(this.restaurant).then(
			( response ) => { this.onFinish(); 
				this.activityService.isFinished("Restaurant '" + this.restaurant.getName() + "' saved!");
			},
			err => { alert(err.message); this.activityService.isFinished();}
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
		let menuData = {menus: this.availableMenus, current: this.restaurant.getMenu()};
		this.cache.put('menuPickerModalData', menuData);
		let menuPickerModalRef = this.dialog.open(MenuPickerModalComponent);
		menuPickerModalRef.afterClosed().subscribe(result => {
			if(typeof result == 'object') {
				this.restaurant.setMenu(result);
			} else {
				//N/A
			}
		});

	}
	/////////////////////////////////////////////////

	//Delete Restaurant modal stuff//////////////////
	confirmDelete ( ) {
		this.cache.put('restaurantDeleteModalData', this.restaurant);
		let deleteRestaurantModalRef = this.dialog.open(DeleteRestaurantModalComponent);
		deleteRestaurantModalRef.afterClosed().subscribe(result => {
			if(!result){
				//Delete was cancelled do nothing
			} else if (typeof result == 'object'){
				//there was an error, display the error
				this.errorService.showError(result);
			} else {
				//restaurant was deleted
				//bounce to restaurant list
				this.onFinish()
			}
		});
	}
	/////////////////////////////////////////////////


	///// Opening Times//////////////
	addOpeningTime ( ) {
		let addOpeningTimeModalRef = this.dialog.open(AddOpeningTimeModalComponent);
		addOpeningTimeModalRef.afterClosed().subscribe(result =>{
			if(typeof result == 'object'){
				this.restaurant.addOpeningTime(result);
			} else {
				//n/a
			} 
		});
	}

	removeOpeningTime ( index : number ) {
		let current : OpeningTimes[] = this.restaurant.getOpeningTimes();
		current.splice(index,1);
		this.restaurant.setOpeningTimes(current);
	}
	///////////////////////////////

	//////////////////////Table Stuff///////////

	createNewTable ( newTableName: string) {
		this.cache.put("tableModalData", this.restaurant.getId());
		let addTableModalRef = this.dialog.open(AddTableModalComponent);
		addTableModalRef.afterClosed().subscribe(result =>{
			if(result != false){
				this.restaurant.addTable( result ) ;
			}
		});
	}
	//////////////////////////////////////////

	uploadImage ( ) {
		let fileObj: File = this.logoImagePicker.nativeElement.files[0];
		let formData = new FormData();
	    formData.append("file", fileObj, this.restaurant.getId() + "_logo_image");
		
		this.imagesService.uploadImage(formData).then(
			(response)=>{
				this.restaurant.setLogoUrl(response);
				this.saveChanges();
				alert("image saved");
			},
			err => {
				alert("Something went wrong with the image upload! Please try again");
			}
		);
	}

	performGeoCode(){
		this.locationService.getLongAndLat(this.restaurant.getLocationNumberName(),
			this.restaurant.getStreetName(),
			this.restaurant.getCity(),
			this.restaurant.getPostCode()).then(
			(response : Object) => {

				this.plotMarker(response.geometry.location);
				this.restaurant.setLocation(response.geometry.location.lat(),response.geometry.location.lng());
			}, 
			err => {
				alert(err);
			}
		);
		
	}

	plotMarker(latLngObj : Object){
		this.mapElement.setCenter(latLngObj);
		if(this.markerElement){
			this.markerElement.setMap(null);
		}
		this.markerElement = new google.maps.Marker({
			map: this.mapElement,
			position: latLngObj
		});
	}

	tabChanged( e: event){
		if(e.tab.textLabel == this.locationTab.textLabel){
			//reload the map
			this.initMapResize();
		}
	}
}
