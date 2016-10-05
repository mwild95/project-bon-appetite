import { Injectable } from '@angular/core';

import { Restaurant } from '../classes/Restaurant';

import { Menu } from '../classes/Menu';

@Injectable()
export class RestaurantsService {

    mockRestaurants: Restaurant[] = [ new Restaurant("1","Test Rest 1"), new Restaurant("2","Test Rest 2") ];

    constructor( ) {

    }

    getRestaurants ( ) {
        return this.mockRestaurants;
    }

    updateRestaurant ( restToUpdate: Restaurant ) {
    	for( let i:number=0; i<this.mockRestaurants.length; i++ ){
    		if( this.mockRestaurants[i].getId() == restToUpdate.getId() ){
    			this.mockRestaurants[i] = restToUpdate as Restaurant;
    			break;
      		}
    	}
    }
    
}