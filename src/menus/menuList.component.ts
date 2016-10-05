import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Menu } from '../classes/Menu';
import { MenuService } from '../services/menu.service';

import { CacheService } from '../services/cache.service';

@Component({
  templateUrl: './src/menus/menuList.template.html'
})

export class MenuListComponent { 
	
	menus : Menu[];


	constructor ( private menuService : MenuService, private cache : CacheService, private router : Router ) {

	}

	ngOnInit () {
		this.menus = this.menuService.getMenus();
	}

	selectMenu ( menu : Menu ) {
		this.cache.put( menu.getId(), menu );
		this.router.navigate(['/manage/menus', menu.getId()]);
	}
}
