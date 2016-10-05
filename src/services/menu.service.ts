import { Injectable } from '@angular/core';

import { Menu } from '../classes/Menu';


@Injectable()
export class MenuService {

    mockMenus: Menu[] = [ new Menu("1","Sunday Menu"), new Menu("2","Weekday Menu") ];

    constructor( ) {

    }

    getMenus ( ) {
        return this.mockMenus;
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