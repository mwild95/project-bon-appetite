import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CacheService } from '../services/cache.service';
import { MenuService } from '../services/menu.service';
import { ProductsService } from '../services/products.service';
import { IngredientsService } from '../services/ingredients.service';

import { Product } from '../classes/Product';
import { Menu } from '../classes/Menu';
import { Ingredient } from '../classes/Ingredient';

import { ModalComponent } from '../modal/modal.module';


declare var $:any;

@Component({
  templateUrl: './src/products/product.template.html'
})

export class ProductComponent { 

	product : Product = new Product({'_id':"1", 'name':"Loading"});
	originalProduct : Product;
	availableIngredients : Ingredient[];


	@ViewChild('deleteProductModal')
	deleteProductModal: ModalComponent;

	@ViewChild('productForm')
	productsForm;

	@ViewChild('addIngredientModal')
	addIngredientModal : ModalComponent;
	
	constructor ( private route : ActivatedRoute, private cache : CacheService, private router : Router, private ProductsService: ProductsService, private ingredientsService: IngredientsService ) {

	}

	ngOnInit () {
		let id = this.route.snapshot.params['productId'];
		if( this.cache.get( id )){
			this.product = $.extend({}, this.cache.get( id ) );
		} else {
			this.ProductsService.getProduct( id ).then(
				(response : Product ) => {
					this.product = response;
					//this.product = new Product( this.originalProduct.getId(), this.originalProduct.getName() );
					//TODO need to check for undefined and redirect to error page 
				},
				err => {
					alert(err.message);
				}
			);
		}

		this.ingredientsService.getIngredients().then(
			( response: Ingredient[] ) => {
				this.availableIngredients = response;
			},
			err => {
				alert(err.message);
			}
		);
		
		
	}


	onSubmit () {

		//this.product holds the edited values
		//products.service.update??
		this.ProductsService.updateProduct(this.product).then(
			( response ) => { this.onFinish(); },
			err => { alert(err.message); }
		);
		
	}

	onCancel () {
		if( this.productsForm.pristine ){
			this.onFinish();
		} else {
			if( confirm ("Are you sure you want to cancel?") ){
				this.onFinish();
			} else {

			}
		}
		
	}

	saveChanges () : Promise<Product> {
		return this.ProductsService.updateProduct(this.product);
	}

	onFinish () {
		this.router.navigate(['/manage/products']);
	}


	//Delete Product modal stuff//////////////////
	confirmDelete ( ) {
		this.deleteProductModal.open();
	}

	deleteProduct ( ) {
		this.ProductsService.deleteProduct( this.product.getId() ).then(
			( response ) => { this.onFinish(); },
			err => { alert(err.message); }
		);
		
	}
	/////////////////////////////////////////////////

	//Add Ingredient Modal ///////////////////////
	addIngredient ( ) {
		this.addIngredientModal.open();
	}

	confirmAddIngredient ( ingredientToAdd : Ingredient) {
		this.product.addIngredient( ingredientToAdd );
		this.addIngredientModal.dismiss();
	}

	removeIngredient ( i : number ) {
		let currentArray : Ingredient[] = this.product.getIngredients();
		currentArray.splice(i,1);
		this.product.setIngredients(currentArray);
	}
	///////////////////////////////////////////////

}
