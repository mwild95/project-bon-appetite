import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Section } from '../classes/Section';
import { SectionsService } from '../services/sections.service';

import { CacheService } from '../services/cache.service';

import { ModalComponent } from '../modal/modal.module';

@Component({
  templateUrl: './src/sections/sectionsList.template.html'
})

export class SectionsListComponent { 
	
	sections : Section[];

	@ViewChild('newSectionModal')
	newSectionModal: ModalComponent;

	constructor ( private sectionsService : SectionsService, private cache : CacheService, private router : Router ) {

	}

	ngOnInit () {

		this.sectionsService.getSections(  ).then(
			result => {
				if ( typeof result != 'undefined' ) {
					this.sections = <Section[]>result;
				}
			},
			err => {
				alert(err.message);
				//DEAL WITH ERROR
			}
		);

	}

	selectSection ( section : Section ) {
		this.cache.put( section.getId(), section );
		this.router.navigate(['/manage/sections', section.getId()]);
	}


//////////add section modal stuff//////////
	addNewSection ( ) {
		this.newSectionModal.open();
	}

	createNewSection ( newRestName: string) {
		let newSection: Section;
		this.sectionsService.createSection( newRestName ).then(
			result => {
				if ( typeof result != 'undefined' ){
					this.selectSection( result );
				}
			},
			err => {
				alert(err.message);
			}
		);
	}
	///////////////////////////////////////////
}
