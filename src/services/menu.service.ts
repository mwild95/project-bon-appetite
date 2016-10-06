import { Injectable } from '@angular/core';

import { Menu } from '../classes/Menu';


@Injectable()
export class MenuService {

    mockMenus: Menu[] = [ new Menu("0","Sunday Menu"), new Menu("1","Weekday Menu") ];

    constructor( ) {

    }

    getMenus ( ) {
        return this.mockMenus;
    }

    createMenu ( name:string ) {
        this.mockMenus.push( new Menu(this.mockMenus.length.toString(), name) );
        return this.mockMenus[ this.mockMenus.length -1 ];
    }

    deleteMenu ( id:string ) {
        for( let i:number=0; i<this.mockMenus.length; i++ ) {
            if( this.mockMenus[i].getId() == id ){
                this.mockMenus.splice( i, 1 );
            }
        }
    }

    updateMenu ( menuToUpdate: Menu ) {
        for( let i:number=0; i<this.mockMenus.length; i++ ) {
            if( this.mockMenus[i].getId() == menuToUpdate.getId() ){
                this.mockMenus[i] = menuToUpdate
            }
        }
    }

    getMenuFromId ( id: string ) {
    	for( let menu of this.mockMenus ){
    		if( menu.getId() == id ){
    			return menu;
    		}
    	}
    	return undefined;
    }
    
}