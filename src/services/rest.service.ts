import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { ConstantsService } from './constants.service';

import { User } from '../user/User';
import { Restaurant } from '../classes/Restaurant';

@Injectable()
export class RestService {

	private rest_server : string;

    constructor ( private constantsService : ConstantsService, private http : Http ) {
    	this.rest_server = this.constantsService.get( "REST_SERVER" );
    }

    

    //rest_server/user/login
    //Params
    	/*
			{
				"username" : "",
				"password" : ""
			}
    	*/
    // Returns
    	/*

    	*/
    public authenticate ( user : User ) : Observable<User> {
        let endPoint : string = this.constantsService.get("USERS_ENDPOINT") + this.constantsService.get("LOGIN_ENDPOINT");
    	return this.http.post(this.rest_server + endPoint, user)
            .map(res => res.json());

    }



    ///// Restaurants

    public getRestaurants ( ) : Observable<Restaurant[]> {
        let endPoint : string = this.constantsService.get("RESTAURANTS_ENDPOINT");
        return this.http.get( this.rest_server + endPoint )
            .map( res => res.json() );
    }

    public createRestaurant ( restToCreateName : string ) {
        let bodyToSend = {"name":restToCreateName};
        let endPoint: string = this.constantsService.get("RESTAURANTS_ENDPOINT");
        return this.http.post( this.rest_server + endPoint , bodyToSend)
            .map( res=> res.json() );
    }  

    public deleteRestaurant ( restToDeleteId : string ) {
        let endPoint : string = this.constantsService.get("RESTAURANTS_ENDPOINT");
        return this.http.delete( this.rest_server + endPoint + "" + restToDeleteId ); 
    }

    
}