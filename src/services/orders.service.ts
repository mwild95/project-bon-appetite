import { Injectable, Inject } from '@angular/core';

import { Order } from '../classes/Order';

import { RestService } from './rest.service';
import { UserService } from './user.service';

import { Menu } from '../classes/Menu';

@Injectable()
export class OrdersService {

    orders : Order[];
    constructor( private restService : RestService, private userService : UserService ) {

    }

    public getOrder ( orderId : string ) {
        return new Promise ( (resolve, reject) => {
            this.restService.getOrder ( orderId )
                .subscribe (
                    ( response : Order ) => {
                        let responseOrder = this.castOrders([response])[0];
                        resolve( responseOrder ) ;
                    }, 
                    ( err ) => {
                        reject( JSON.parse( err._body ) );
                    }
                );
        } );
    }

    public getOrders ( restaurantId : string, status : string ) : Promise< Order[] >{
        return new Promise( (resolve, reject) => {
            this.restService.getOrders( restaurantId, status )
                .subscribe(
                    (response: Order[]) => {
                        this.orders = this.castOrders( response );
                        resolve(response);
                    },
                    err => {
                        reject(JSON.parse(err._body));
                    }
                );
        });
        //return this.mockOrders;
    }

    public createOrder ( orderName: string ) : Promise< Order >{
        return new Promise( (resolve, reject) => {
            this.restService.createOrder ( orderName, this.userService.getId() )
                .subscribe (
                    ( response : Order ) => {
                        let newOrder: Order = this.castOrders([response])[0];
                        this.orders.push(newOrder);
                        resolve( newOrder );
                    },
                    err => {
                        reject(JSON.parse(err._body));
                    }
                );
        });
    }

    public updateOrder ( restToUpdate: Order ) : Promise<Order> {
    	
        return new Promise ( ( resolve, reject ) => {
            this.restService.updateOrder ( restToUpdate ) 
                .subscribe (
                    ( response : Order ) => {
                        let updatedOrder : Order = this.castOrders([response])[0];
                        
                        resolve(updatedOrder);
                    },
                    err => { reject(JSON.parse(err._body));}
                );
        });
    }

    

    public deleteOrder ( orderId : string ) {

        return new Promise( (resolve, reject) => {
            this.restService.deleteOrder ( orderId )
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

    private castOrders( orders: any[] ) {
        for( let i=0; i<orders.length; i++ ) {
            var order = orders[i];
            if(order != null) {
                orders[i] = new Order(order);
            }
            
        }

        return orders;
    }
    
}