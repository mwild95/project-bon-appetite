import { Injectable, Inject } from '@angular/core';

import { Restaurant } from '../classes/Restaurant';

import { RestService } from './rest.service';
import { UserService } from './user.service';

import { Menu } from '../classes/Menu';

@Injectable()
export class RestaurantsService {

    restaurants : Restaurant[];
    constructor( private restService : RestService, private userService : UserService ) {

    }

    public getRestaurant ( restaurantId : string ) {
        return new Promise ( (resolve, reject) => {
            this.restService.getRestaurant ( restaurantId )
                .subscribe (
                    ( response : Restaurant ) => {
                        let responseRestaurant = this.castRestaurants([response])[0];
                        resolve( responseRestaurant ) ;
                    }, 
                    ( err ) => {
                        reject( JSON.parse( err._body ) );
                    }
                );
        } );
    }

    public getRestaurants ( ) : Promise< Restaurant[] >{
        return new Promise( (resolve, reject) => {
            this.restService.getRestaurants( this.userService.getId() )
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

    public createRestaurant ( restaurantName: string ) : Promise< Restaurant >{
        return new Promise( (resolve, reject) => {
            this.restService.createRestaurant ( restaurantName, this.userService.getId() )
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

    public updateRestaurant ( restToUpdate: Restaurant ) : Promise<Restaurant> {
    	
        return new Promise ( ( resolve, reject ) => {
            this.restService.updateRestaurant ( restToUpdate ) 
                .subscribe (
                    ( response : Restaurant ) => {
                        let updatedRestaurant : Restaurant = this.castRestaurants([response])[0];
                        
                        resolve(updatedRestaurant);
                    },
                    err => { reject(JSON.parse(err._body));}
                );
        });
    }

    

    public deleteRestaurant ( restaurantId : string ) {

        return new Promise( (resolve, reject) => {
            this.restService.deleteRestaurant ( restaurantId )
                .subscribe (
                    ( response ) => {
                        resolve( response );
                    },
                    err => {
                        reject(JSON.parse(err._body));
                    }
                );
        });
    }

    private castRestaurants( restaurants: any[] ) {
        for( let i=0; i<restaurants.length; i++ ) {
            var restaurant = restaurants[i];
            if(restaurant != null) {
                restaurants[i] = new Restaurant(restaurant);
            }
            
        }

        return restaurants;
    }
    
}