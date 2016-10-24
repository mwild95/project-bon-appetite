import { Injectable } from '@angular/core';

import { RestService } from './rest.service';

import { RestaurantsService } from './restaurants.service';

@Injectable()
export class CacheService {

    constructor ( private restService : RestService, private restaurantsService: RestaurantsService ) {

    }

    cachedObjects : {} = [];

    put ( id : string, newObject : any ) {
    	this.cachedObjects[id] = newObject;
    }

    get ( id : string ) {
        return this.cachedObjects[id];
    }

    remove ( id : string ) {
    	delete this.cachedObjects[id];
    }
    
}