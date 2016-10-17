import { Injectable } from '@angular/core';

import { Restaurant } from '../classes/Restaurant';

import { RestService } from './rest.service';

import { Menu } from '../classes/Menu';

@Injectable()
export class RestaurantsService {

    mockRestaurants: Restaurant[] = [ new Restaurant("0","Test Rest 1"), new Restaurant("1","Test Rest 2") ];
    restaurants : Restaurant[];
    constructor( private restService : RestService ) {

    }

    getRestaurants ( ) : Promise< Restaurant[] >{
        return new Promise( (resolve, reject) => {
            this.restService.getRestaurants(  )
                .subscribe(
                    (response: Restaurant[]) => {
                        this.restaurants = this.castRestaurants( response );
                        resolve(response);
                    },
                    err => {
                        reject(JSON.parse(err._body));
                    }
                );
        });
        //return this.mockRestaurants;
    }

    createRestaurant ( restaurantName: string ) : Promise< Restaurant >{
        console.log("Need to implement the add restaurant rest call");
        return new Promise( (resolve, reject) => {
            this.restService.createRestaurant ( restaurantName )
                .subscribe (
                    ( response : Restaurant ) => {
                        let newRestaurant: Restaurant = this.castRestaurants([response])[0];
                        this.restaurants.push(newRestaurant);
                        resolve( newRestaurant );
                    },
                    err => {
                        reject(JSON.parse(err._body));
                    }
                );
        });
    }

    updateRestaurant ( restToUpdate: Restaurant ) {
    	for( let i:number=0; i<this.mockRestaurants.length; i++ ){
    		if( this.mockRestaurants[i].getId() == restToUpdate.getId() ){
    			this.mockRestaurants[i] = restToUpdate as Restaurant;
    			break;
      		}
    	}
    }

    private castRestaurants( restaurants: any[] ) {
        for( let i=0; i<restaurants.length; i++ ) {
            var restaurant = restaurants[i];
            restaurants[i] = new Restaurant(restaurant._id, restaurant.name);
        }

        return restaurants;
    }

    public deleteRestaurant ( restaurantToDeleteId : string ) {
        for( let i:number=0; i<this.mockRestaurants.length; i++ ){
            if( this.mockRestaurants[i].getId() == restaurantToDeleteId ){
                this.mockRestaurants.splice(i,1);
                break;
            }
        }
    }
    
}