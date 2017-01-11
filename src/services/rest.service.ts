import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { ConstantsService } from './constants.service';
import { UserService } from './user.service';

import { User } from '../user/User';
import { Restaurant } from '../classes/Restaurant';
import { Menu } from '../classes/Menu';
import { Ingredient } from '../classes/Ingredient';
import { Product } from '../classes/Product';
import { Section } from '../classes/Section';
import { Order } from '../classes/Order';
import { Table } from '../classes/Table';

@Injectable()
export class RestService {

	private rest_server : string;
    private restaurant_endpoint : string;
    private menu_endpoint : string;
    private ingredient_endpoint : string;
    private product_endpoint : string;
    private section_endpoint : string;
    private order_endpoint : string;
    private single_restaurant_endpoint : string;
    private table_endpoint : string;

    constructor ( private constantsService : ConstantsService, private http : Http ) {
    	this.rest_server = this.constantsService.get( "REST_SERVER" );
        this.restaurant_endpoint = this.constantsService.get("RESTAURANTS_ENDPOINT");
        this.menu_endpoint = this.constantsService.get("MENUS_ENDPOINT");
        this.ingredient_endpoint = this.constantsService.get("INGREDIENTS_ENDPOINT");
        this.product_endpoint = this.constantsService.get("PRODUCTS_ENDPOINT");
        this.section_endpoint = this.constantsService.get("SECTIONS_ENDPOINT");
        this.order_endpoint = this.constantsService.get("ORDERS_ENDPOINT");
        this.single_restaurant_endpoint = this.constantsService.get("RESTAURANT_ENDPOINT");
        this.table_endpoint = this.constantsService.get("TABLE_ENDPOINT");
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

    public createUser ( user : User ) : Observable<User> {
        let endPoint : string = this.constantsService.get("USERS_ENDPOINT");
        return this.http.post(this.rest_server + endPoint, user)
            .map(res=>res.json());
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

    public createTable ( tableName : string, restaurant: string ) : Observable< Table > {
        let bodyToSend = {"name": tableName, "restaurant" : restaurant };
        let endPoint : string = this.table_endpoint;
        return this.http.post( this.rest_server + endPoint, bodyToSend)
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




    ////// Ingredients
    public getIngredient( ingredientId : string ) : Observable<Ingredient> {
        let endPoint : string = this.ingredient_endpoint;
        return this.http.get( this.rest_server + endPoint + ingredientId )
            .map( res => res.json() );
    }

    public getIngredients ( userId : string) : Observable<Ingredient[]> {
        let endPoint : string = this.ingredient_endpoint;
        return this.http.get( this.rest_server + endPoint + "?_id=" + userId )
            .map( res => res.json() );
    }

    public createIngredient ( ingredientToCreateName : string, _id: string ) : Observable< Ingredient >{
        let bodyToSend = {"name":ingredientToCreateName, "owning_user" : _id};
        let endPoint: string = this.ingredient_endpoint;
        return this.http.post( this.rest_server + endPoint , bodyToSend)
            .map( res=> res.json() );
    }  

    public deleteIngredient ( ingredientToDeleteId : string ) : Observable< Response > {
        let endPoint : string = this.ingredient_endpoint;
        return this.http.delete( this.rest_server + endPoint + ingredientToDeleteId ); 
    }

    public updateIngredient ( ingredientToUpdate : Ingredient ) : Observable< Ingredient >{
        let endPoint : string = this.ingredient_endpoint;
        return this.http.put( this.rest_server + endPoint + ingredientToUpdate.getId(), ingredientToUpdate )
            .map( res => res.json() );
    }
    

     ///// Products

    public getProduct ( productId : string ) : Observable<Product> {
        let endPoint : string = this.product_endpoint;
        return this.http.get( this.rest_server + endPoint + productId )
            .map( res => res.json() ); 
    }

    public getProducts ( userId : string ) : Observable<Product[]> {
        let endPoint : string = this.product_endpoint;
        return this.http.get( this.rest_server + endPoint + "?_id=" + userId )
            .map( res => res.json() );
    }

    public createProduct ( restToCreateName : string, _id : string ) {
        let bodyToSend = {"name":restToCreateName, "owning_user":_id };
        let endPoint: string = this.product_endpoint;
        return this.http.post( this.rest_server + endPoint , bodyToSend)
            .map( res=> res.json() );
    }  

    public deleteProduct ( restToDeleteId : string ) {
        let endPoint : string = this.product_endpoint;
        return this.http.delete( this.rest_server + endPoint + "" + restToDeleteId ); 
    }

    public updateProduct ( restToUpdate : Product ) : Observable< Product >{
        let endPoint : string = this.product_endpoint;
        return this.http.put( this.rest_server + endPoint + restToUpdate.getId(), restToUpdate )
            .map( res => res.json() );
    }

     ///// Sections

    public getSection ( sectionId : string ) : Observable<Section> {
        let endPoint : string = this.section_endpoint;
        return this.http.get( this.rest_server + endPoint + sectionId )
            .map( res => res.json() ); 
    }

    public getSections ( userId : string ) : Observable<Section[]> {
        let endPoint : string = this.section_endpoint;
        return this.http.get( this.rest_server + endPoint + "?_id=" + userId )
            .map( res => res.json() );
    }

    public createSection ( restToCreateName : string, _id : string ) {
        let bodyToSend = {"name":restToCreateName, "owning_user":_id };
        let endPoint: string = this.section_endpoint;
        return this.http.post( this.rest_server + endPoint , bodyToSend)
            .map( res=> res.json() );
    }  

    public deleteSection ( restToDeleteId : string ) {
        let endPoint : string = this.section_endpoint;
        return this.http.delete( this.rest_server + endPoint + "" + restToDeleteId ); 
    }

    public updateSection ( restToUpdate : Section ) : Observable< Section >{
        let endPoint : string = this.section_endpoint;
        return this.http.put( this.rest_server + endPoint + restToUpdate.getId(), restToUpdate )
            .map( res => res.json() );
    }


    ///// Orders

    public getOrder ( orderId : string ) : Observable<Order> {
        let endPoint : string = this.order_endpoint;
        return this.http.get( this.rest_server + endPoint + orderId )
            .map( res => res.json() ); 
    }

    public getOrders ( restaurantId : string, status : string ) : Observable<Order[]> {
        let endPoint : string = this.order_endpoint + this.single_restaurant_endpoint;
        return this.http.get( this.rest_server + endPoint + restaurantId + "?status=" + status )
            .map( res => res.json() );
    }

    public createOrder ( restToCreateName : string, _id : string ) {
        let bodyToSend = {"name":restToCreateName, "owning_user":_id };
        let endPoint: string = this.order_endpoint;
        return this.http.post( this.rest_server + endPoint , bodyToSend)
            .map( res=> res.json() );
    }  

    public deleteOrder ( restToDeleteId : string ) {
        let endPoint : string = this.order_endpoint;
        return this.http.delete( this.rest_server + endPoint + "" + restToDeleteId ); 
    }

    public updateOrder ( restToUpdate : Order ) : Observable< Order >{
        let endPoint : string = this.order_endpoint;
        return this.http.put( this.rest_server + endPoint + restToUpdate.getId(), restToUpdate )
            .map( res => res.json() );
    }
}