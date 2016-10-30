import { Injectable } from '@angular/core';

import { Ingredient } from '../classes/Ingredient';

import { RestService } from './rest.service';
import { UserService } from './user.service';

import { Response } from '@angular/http';


@Injectable()
export class IngredientsService {

    
    ingredients : Ingredient[];

    constructor( private restService : RestService, private userService : UserService ) {

    }

    getIngredient ( id: string ) : Promise<Ingredient>{
        return new Promise ( (resolve, reject) => {
            this.restService.getIngredient ( id )
                .subscribe (
                    ( response : Ingredient ) => {
                        let responseIngredient = this.castIngredients([response])[0];
                        resolve( responseIngredient ) ;
                    }, 
                    ( err ) => {
                        reject( JSON.parse( err._body ) );
                    }
                );
        } );
    }

    getIngredients (  ) : Promise<Ingredient[]>{
        return new Promise( (resolve, reject) => {
            this.restService.getIngredients( this.userService.getId() )
                .subscribe(
                    (response: Ingredient[]) => {
                        this.ingredients = this.castIngredients( response );
                        resolve(response);
                    },
                    err => {
                        reject(JSON.parse(err._body));
                    }
                );
        });
    }

    createIngredient ( ingredientName : string ) : Promise<Ingredient> {
        return new Promise( (resolve, reject) => {
            this.restService.createIngredient ( ingredientName , this.userService.getId() )
                .subscribe (
                    ( response : Ingredient ) => {
                        let newIngredient: Ingredient = this.castIngredients([response])[0];
                        this.ingredients.push(newIngredient);
                        resolve( newIngredient );
                    },
                    err => {
                        reject(JSON.parse(err._body));
                    }
                );
        });
    }

    deleteIngredient ( ingredientId:string ) : Promise<Response> {
        return new Promise( (resolve, reject) => {
            this.restService.deleteIngredient ( ingredientId )
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

    updateIngredient ( ingredientToUpdate: Ingredient ) : Promise<Ingredient> {
        return new Promise ( ( resolve, reject ) => {
            this.restService.updateIngredient ( ingredientToUpdate ) 
                .subscribe (
                    ( response : Ingredient ) => {
                        let updatedIngredient : Ingredient = this.castIngredients([response])[0];
                        for( let i:number=0; i<this.ingredients.length; i++ ){
                            if( this.ingredients[i].getId() == updatedIngredient.getId() ){
                                this.ingredients[i] = updatedIngredient as Ingredient;
                                break;
                            }
                        }
                        resolve(updatedIngredient);
                    },
                    err => { reject(JSON.parse(err._body));}
                );
        });
    }

    private castIngredients( ingredients: any[] ) : Ingredient[]{
        for( let i=0; i<ingredients.length; i++ ) {
            var ingredient = ingredients[i];
            if( ingredient != null ){
                ingredients[i] = new Ingredient(ingredient);
            }
            
        }

        return ingredients;
    }
    
}