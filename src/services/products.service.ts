import { Injectable, Inject } from '@angular/core';

import { Product } from '../classes/Product';

import { RestService } from './rest.service';
import { UserService } from './user.service';

import { Menu } from '../classes/Menu';

@Injectable()
export class ProductsService {

    products : Product[];
    constructor( private restService : RestService, private userService : UserService ) {

    }

    public getProduct ( productId : string ) {
        return new Promise ( (resolve, reject) => {
            this.restService.getProduct ( productId )
                .subscribe (
                    ( response : Product ) => {
                        let responseProduct = this.castProducts([response])[0];
                        resolve( responseProduct ) ;
                    }, 
                    ( err ) => {
                        reject( JSON.parse( err._body ) );
                    }
                );
        } );
    }

    public getProducts ( ) : Promise< Product[] >{
        return new Promise( (resolve, reject) => {
            this.restService.getProducts( this.userService.getId() )
                .subscribe(
                    (response: Product[]) => {
                        this.products = this.castProducts( response );
                        resolve(response);
                    },
                    err => {
                        reject(JSON.parse(err._body));
                    }
                );
        });
        //return this.mockProducts;
    }

    public createProduct ( productName: string ) : Promise< Product >{
        return new Promise( (resolve, reject) => {
            this.restService.createProduct ( productName, this.userService.getId() )
                .subscribe (
                    ( response : Product ) => {
                        let newProduct: Product = this.castProducts([response])[0];
                        this.products.push(newProduct);
                        resolve( newProduct );
                    },
                    err => {
                        reject(JSON.parse(err._body));
                    }
                );
        });
    }

    public updateProduct ( restToUpdate: Product ) : Promise<Product> {
    	
        return new Promise ( ( resolve, reject ) => {
            this.restService.updateProduct ( restToUpdate ) 
                .subscribe (
                    ( response : Product ) => {
                        let updatedProduct : Product = this.castProducts([response])[0];
                        
                        resolve(updatedProduct);
                    },
                    err => { reject(JSON.parse(err._body));}
                );
        });
    }

    

    public deleteProduct ( productId : string ) {

        return new Promise( (resolve, reject) => {
            this.restService.deleteProduct ( productId )
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

    private castProducts( products: any[] ) {
        for( let i=0; i<products.length; i++ ) {
            var product = products[i];
            if(product != null) {
                products[i] = new Product(product);
            }
            
        }

        return products;
    }
    
}