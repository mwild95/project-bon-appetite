import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CacheService} from '../services/cache.service';
import { MenuService } from '../services/menu.service';

import { Menu } from '../classes/Menu';

import { ModalComponent } from '../modal/modal.module';

declare var $:any;

@Component({
  templateUrl: './src/menus/menu.template.html'
})

export class MenuComponent { 

	menu: Menu;

	@ViewChild('deleteMenuModal')	
	deleteMenuModal: ModalComponent;

	constructor ( private route : ActivatedRoute, private cache : CacheService, private router : Router, private MenuService : MenuService ) {

	}

	ngOnInit () {
		let id = this.route.snapshot.params['menuId'];
		this.menu = $.extend({}, this.cache.get( id ) );
		
	}

	onCancel () {
		if( confirm ("Are you sure you want to cancel?") ){
			this.onFinish();
		} else {

		}
	}

	onSubmit ( ) {
		this.saveChanges();
		this.onFinish();
	}

	onFinish () {
		this.router.navigate(['/manage/menus']);
	}

	saveChanges () {
		this.MenuService.updateMenu(this.menu);
		alert("Changes not saved (Rest needs to be implemented)");
	}

	confirmDelete ( ) {
		this.deleteMenuModal.open();
	}

	deleteMenu ( ) {
		this.MenuService.deleteMenu( this.menu.getId() ); 
		this.onFinish();
	}

}
