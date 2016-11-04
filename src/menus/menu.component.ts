import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CacheService} from '../services/cache.service';
import { MenuService } from '../services/menu.service';
import { SectionsService } from '../services/sections.service'; 

import { Menu } from '../classes/Menu';
import { Section } from '../classes/Section';

import { ModalComponent } from '../modal/modal.module';

declare var $:any;

@Component({
  templateUrl: './src/menus/menu.template.html'
})

export class MenuComponent { 

	menu: Menu;
	availableSections : Section[];

	@ViewChild('deleteMenuModal')	
	deleteMenuModal: ModalComponent;

	@ViewChild('addSectionModal')
	addSectionModal: ModalComponent;

	constructor ( private route : ActivatedRoute, private cache : CacheService, private router : Router, private MenuService : MenuService, private sectionsService : SectionsService ) {

	}

	ngOnInit () {
		let id = this.route.snapshot.params['menuId'];
		this.menu = $.extend({}, this.cache.get( id ) );
		
		this.sectionsService.getSections().then(
			(response : Section[]) => {
				this.availableSections = response;
			}, 
			err => {
				alert(err.message);
			}
		);
	}

	onCancel () {
		if( confirm ("Are you sure you want to cancel?") ){
			this.onFinish();
		} else {

		}
	}

	onSubmit ( ) {
		this.saveChanges().then(
			( response ) => {this.onFinish();},
			( err ) => { alert(err.message); }
		);
	}

	onFinish () {
		this.router.navigate(['/manage/menus']);
	}

	saveChanges () {
		return this.MenuService.updateMenu(this.menu);
	}

	confirmDelete ( ) {
		this.deleteMenuModal.open();
	}

	deleteMenu ( ) {
		this.MenuService.deleteMenu( this.menu.getId() ).then(
			( response ) => { this.onFinish(); },
			( err ) => { alert(err.message); }
		); 
	}


	////// SECTIONS STUFF?/////////////////
	addSection ( ) {
		this.addSectionModal.open();
	}

	confirmAddSection ( sectionToAdd : Section) {
		this.menu.addSection( sectionToAdd );
		this.addSectionModal.close();
	}

	removeSection ( i : number ) {
		let currentSections : Section[] = this.menu.getSections();
		currentSections.splice(i,1);
		this.menu.setSections(currentSections);
	}
	///////////////////////////////////////

}
