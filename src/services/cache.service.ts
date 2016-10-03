import { Injectable } from '@angular/core';


@Injectable()
export class CacheService {

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