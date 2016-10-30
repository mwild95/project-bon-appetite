import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../classes/Product';
import { ProductsService } from '../services/products.service';

import { CacheService } from '../services/cache.service';

import { ModalComponent } from '../modal/modal.module';

@Component({
  templateUrl: './src/products/productsList.template.html'
})

export class ProductsListComponent { 
	
	products : Product[];

	@ViewChild('newProductModal')
	newProductModal: ModalComponent;

	constructor ( private productsService : ProductsService, private cache : CacheService, private router : Router ) {

	}

	ngOnInit () {
		this.productsService.getProducts(  ).then(
			result => {
				if ( typeof result != 'undefined' ) {
					this.products = <Product[]>result;
				}
			},
			err => {
				alert(err.message);
				//DEAL WITH ERROR
			}
		);

	}

	selectProduct ( product : Product ) {
		this.cache.put( product.getId(), product );
		this.router.navigate(['/manage/products', product.getId()]);
	}


//////////add product modal stuff//////////
	addNewProduct ( ) {
		this.newProductModal.open();
	}

	createNewProduct ( newRestName: string) {
		let newProduct: Product;
		this.productsService.createProduct( newRestName ).then(
			result => {
				if ( typeof result != 'undefined' ){
					this.selectProduct( result );
				}
			},
			err => {
				alert(err.message);
			}
		);
	}
	///////////////////////////////////////////
}
