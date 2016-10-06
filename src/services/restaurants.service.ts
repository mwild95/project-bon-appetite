import { Injectable } from '@angular/core';

import { Restaurant } from '../classes/Restaurant';

import { Menu } from '../classes/Menu';

@Injectable()
export class RestaurantsService {

    mockRestaurants: Restaurant[] = [ new Restaurant("0","Test Rest 1"), new Restaurant("1","Test Rest 2") ];

    constructor( ) {

    }

    getRestaurants ( ) {
        return this.mockRestaurants;
    }

    createRestaurant ( restaurantName: string ) {
        console.log("Need to implement the add restaurant rest call");
        this.mockRestaurants.push( new Restaurant(this.mockRestaurants.length.toString(), restaurantName ));
        return this.mockRestaurants[this.mockRestaurants.length-1];
    }

    updateRestaurant ( restToUpdate: Restaurant ) {
    	for( let i:number=0; i<this.mockRestaurants.length; i++ ){
    		if( this.mockRestaurants[i].getId() == restToUpdate.getId() ){
    			this.mockRestaurants[i] = restToUpdate as Restaurant;
    			break;
      		}
    	}
    }

    deleteRestaurant ( restaurantToDeleteId : string ) {
        for( let i:number=0; i<this.mockRestaurants.length; i++ ){
            if( this.mockRestaurants[i].getId() == restaurantToDeleteId ){
                this.mockRestaurants.splice(i,1);
                break;
            }
        }
    }
    
}