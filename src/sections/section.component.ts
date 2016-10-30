import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CacheService } from '../services/cache.service';
import { MenuService } from '../services/menu.service';
import { SectionsService } from '../services/sections.service';
import { ProductsService } from '../services/products.service';

import { Section } from '../classes/Section';
import { Menu } from '../classes/Menu';
import { Product } from '../classes/Product';

import { ModalComponent } from '../modal/modal.module';


declare var $:any;

@Component({
  templateUrl: './src/sections/section.template.html'
})

export class SectionComponent { 

	section : Section = new Section({'_id':"1", 'name':"Loading"});
	originalSection : Section;
	availableProducts : Product[];


	@ViewChild('deleteSectionModal')
	deleteSectionModal: ModalComponent;

	@ViewChild('loginForm')
	sectionsForm;

	@ViewChild('addProductModal')
	addProductModal : ModalComponent;
	
	constructor ( private route : ActivatedRoute, private cache : CacheService, private router : Router, private SectionsService: SectionsService, private productsService: ProductsService ) {

	}

	ngOnInit () {
		let id = this.route.snapshot.params['sectionId'];
		if( this.cache.get( id )){
			this.section = $.extend({}, this.cache.get( id ) );
		} else {
			this.SectionsService.getSection( id ).then(
				(response : Section ) => {
					this.section = response;
					//this.section = new Section( this.originalSection.getId(), this.originalSection.getName() );
					//TODO need to check for undefined and redirect to error page 
				},
				err => {
					alert(err.message);
				}
			);
		}

		this.productsService.getProducts().then(
			( response: Product[] ) => {
				this.availableProducts = response;
			},
			err => {
				alert(err.message);
			}
		);
		
		
	}


	onSubmit () {

		//this.section holds the edited values
		//sections.service.update??
		this.SectionsService.updateSection(this.section).then(
			( response ) => { this.onFinish(); },
			err => { alert(err.message); }
		);
		
	}

	onCancel () {
		if( this.sectionsForm.pristine ){
			this.onFinish();
		} else {
			if( confirm ("Are you sure you want to cancel?") ){
				this.onFinish();
			} else {

			}
		}
		
	}

	saveChanges () : Promise<Section> {
		return this.SectionsService.updateSection(this.section);
	}

	onFinish () {
		this.router.navigate(['/manage/sections']);
	}


	//Delete Section modal stuff//////////////////
	confirmDelete ( ) {
		this.deleteSectionModal.open();
	}

	deleteSection ( ) {
		this.SectionsService.deleteSection( this.section.getId() ).then(
			( response ) => { this.onFinish(); },
			err => { alert(err.message); }
		);
		
	}
	/////////////////////////////////////////////////

	//Add Product Modal ///////////////////////
	addProduct ( ) {
		this.addProductModal.open();
	}

	confirmAddProduct ( productToAdd : Product) {
		this.section.addProduct( productToAdd );
		this.addProductModal.close();
	}

	removeProduct ( i : number ) {
		let currentArray : Product[] = this.section.getProducts();
		currentArray.splice(i,1);
		this.section.setProducts(currentArray);
	}
	///////////////////////////////////////////////

}
