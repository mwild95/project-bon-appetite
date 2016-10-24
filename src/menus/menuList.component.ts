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
		this.menuService.getMenus().then(
			( response ) => { this.menus = response },
			( err ) => { alert( err.message ); }
		);
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
		this.menuService.createMenu( menuName ).then(
			(response) => { this.selectMenu( response ); },
			(err) => {alert(err.message)}
		);
	}
	///////////////////////////////////////////////////////
}
