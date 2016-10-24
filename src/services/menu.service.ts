import { Injectable } from '@angular/core';

import { Menu } from '../classes/Menu';

import { RestService } from './rest.service';
import { UserService } from './user.service';

import { Response } from '@angular/http';


@Injectable()
export class MenuService {

    
    menus : Menu[];

    constructor( private restService : RestService, private userService : UserService ) {

    }

    getMenu ( id: string ) : Promise<Menu>{
        return new Promise ( (resolve, reject) => {
            this.restService.getMenu ( id )
                .subscribe (
                    ( response : Menu ) => {
                        let responseMenu = this.castMenus([response])[0];
                        resolve( responseMenu ) ;
                    }, 
                    ( err ) => {
                        reject( JSON.parse( err._body ) );
                    }
                );
        } );
    }

    getMenus (  ) : Promise<Menu[]>{
        return new Promise( (resolve, reject) => {
            this.restService.getMenus( this.userService.getId() )
                .subscribe(
                    (response: Menu[]) => {
                        this.menus = this.castMenus( response );
                        resolve(response);
                    },
                    err => {
                        reject(JSON.parse(err._body));
                    }
                );
        });
    }

    createMenu ( menuName : string ) : Promise<Menu> {
        return new Promise( (resolve, reject) => {
            this.restService.createMenu ( menuName , this.userService.getId() )
                .subscribe (
                    ( response : Menu ) => {
                        let newMenu: Menu = this.castMenus([response])[0];
                        this.menus.push(newMenu);
                        resolve( newMenu );
                    },
                    err => {
                        reject(JSON.parse(err._body));
                    }
                );
        });
    }

    deleteMenu ( menuId:string ) : Promise<Response> {
        return new Promise( (resolve, reject) => {
            this.restService.deleteMenu ( menuId )
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

    updateMenu ( menuToUpdate: Menu ) : Promise<Menu> {
        return new Promise ( ( resolve, reject ) => {
            this.restService.updateMenu ( menuToUpdate ) 
                .subscribe (
                    ( response : Menu ) => {
                        let updatedMenu : Menu = this.castMenus([response])[0];
                        for( let i:number=0; i<this.menus.length; i++ ){
                            if( this.menus[i].getId() == updatedMenu.getId() ){
                                this.menus[i] = updatedMenu as Menu;
                                break;
                            }
                        }
                        resolve(updatedMenu);
                    },
                    err => { reject(JSON.parse(err._body));}
                );
        });
    }

    private castMenus( menus: any[] ) : Menu[]{
        for( let i=0; i<menus.length; i++ ) {
            var menu = menus[i];
            if( menu != null ){
                menus[i] = new Menu(menu);
            }
            
        }

        return menus;
    }
    
}