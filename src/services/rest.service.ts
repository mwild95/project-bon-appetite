import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { ConstantsService } from './constants.service';
import { UserService } from './user.service';

import { User } from '../user/User';
import { Restaurant } from '../classes/Restaurant';
import { Menu } from '../classes/Menu';

@Injectable()
export class RestService {

	private rest_server : string;
    private restaurant_endpoint : string;
    private menu_endpoint : string;

    constructor ( private constantsService : ConstantsService, private http : Http ) {
    	this.rest_server = this.constantsService.get( "REST_SERVER" );
        this.restaurant_endpoint = this.constantsService.get("RESTAURANTS_ENDPOINT");
        this.menu_endpoint = this.constantsService.get("MENUS_ENDPOINT");
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

    public getRestaurant ( restaurantId : string ) : Observable<Restaurant> {
        let endPoint : string = this.restaurant_endpoint;
        return this.http.get( this.rest_server + endPoint + restaurantId )
            .map( res => res.json() ); 
    }

    public getRestaurants ( userId : string ) : Observable<Restaurant[]> {
        let endPoint : string = this.restaurant_endpoint;
        return this.http.get( this.rest_server + endPoint + "?_id=" + userId )
            .map( res => res.json() );
    }

    public createRestaurant ( restToCreateName : string, _id : string ) {
        let bodyToSend = {"name":restToCreateName, "owning_user":_id };
        let endPoint: string = this.restaurant_endpoint;
        return this.http.post( this.rest_server + endPoint , bodyToSend)
            .map( res=> res.json() );
    }  

    public deleteRestaurant ( restToDeleteId : string ) {
        let endPoint : string = this.restaurant_endpoint;
        return this.http.delete( this.rest_server + endPoint + "" + restToDeleteId ); 
    }

    public updateRestaurant ( restToUpdate : Restaurant ) : Observable< Restaurant >{
        let endPoint : string = this.restaurant_endpoint;
        return this.http.put( this.rest_server + endPoint + restToUpdate.getId(), restToUpdate )
            .map( res => res.json() );
    }


    ////// Menus
    public getMenu( menuId : string ) : Observable<Menu> {
        let endPoint : string = this.menu_endpoint;
        return this.http.get( this.rest_server + endPoint + menuId )
            .map( res => res.json() );
    }

    public getMenus ( userId : string) : Observable<Menu[]> {
        let endPoint : string = this.menu_endpoint;
        return this.http.get( this.rest_server + endPoint + "?_id=" + userId )
            .map( res => res.json() );
    }

    public createMenu ( menuToCreateName : string, _id: string ) : Observable< Menu >{
        let bodyToSend = {"name":menuToCreateName, "owning_user" : _id};
        let endPoint: string = this.menu_endpoint;
        return this.http.post( this.rest_server + endPoint , bodyToSend)
            .map( res=> res.json() );
    }  

    public deleteMenu ( menuToDeleteId : string ) : Observable< Response > {
        let endPoint : string = this.menu_endpoint;
        return this.http.delete( this.rest_server + endPoint + menuToDeleteId ); 
    }

    public updateMenu ( menuToUpdate : Menu ) : Observable< Menu >{
        let endPoint : string = this.menu_endpoint;
        return this.http.put( this.rest_server + endPoint + menuToUpdate.getId(), menuToUpdate )
            .map( res => res.json() );
    }
    
}