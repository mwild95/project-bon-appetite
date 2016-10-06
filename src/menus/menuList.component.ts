import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Menu } from '../classes/Menu';
import { MenuService } from '../services/menu.service';

import { CacheService } from '../services/cache.service';

import { ModalComponent } from '../modal/modal.module';

@Component({
  templateUrl: './src/menus/menuList.template.html'
})

export class MenuListComponent { 
	
	menus : Menu[];

	@ViewChild('newMenuModal')
	newMenuModal: ModalComponent;

	constructor ( private menuService : MenuService, private cache : CacheService, private router : Router ) {

	}

	ngOnInit () {
		this.menus = this.menuService.getMenus();
	}

	selectMenu ( menu : Menu ) {
		this.cache.put( menu.getId(), menu );
		this.router.navigate(['/manage/menus', menu.getId()]);
	}

	//add new menu modal stuff/////////////////////////////
	addNewMenu ( ) {
		this.newMenuModal.open();
	}

	createNewMenu ( menuName: string ) {
		let newMenu: Menu = this.menuService.createMenu( menuName );
		this.selectMenu( newMenu );
	}
	///////////////////////////////////////////////////////
}
