import { Injectable, Inject } from '@angular/core';

import { Product } from '../classes/Product';

import { RestService } from './rest.service';
import { UserService } from './user.service';

import { Menu } from '../classes/Menu';

@Injectable()
export class ImagesService {

    constructor( private restService : RestService, private userService : UserService ) {

    }

    public getProduct ( productId : string ) {
        return new Promise ( (resolve, reject) => {
            this.restService.getProduct ( productId )
                .subscribe (
                    ( response : Product ) => {
                       
                        resolve( response ) ;
                    }, 
                    ( err ) => {
                        reject( JSON.parse( err._body ) );
                    }
                );
        } );
    }


    public uploadImage( image: FormData) {
        return new Promise( (resolve, reject) => {
            this.restService.uploadImage(image)
                .subscribe(
                    ( response: string )=> {
                        resolve( response._body );
                    },
                    err => {
                        reject(JSON.parse(err._body));
                    }
                );
        });
    }
    
}