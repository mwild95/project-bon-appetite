import { Injectable } from '@angular/core';

import { Restaurant } from '../classes/Restaurant';

@Injectable()
export class RestaurantsService {

    mockRestaurants: Restaurant[] = [ new Restaurant("1","Test Rest 1"), new Restaurant("2","Test Rest 2") ];

    constructor( ) {

    }

    getRestaurants ( ) {
        return this.mockRestaurants;
    }
    
}