import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CacheService } from '../services/cache.service';
import { IngredientsService } from '../services/ingredients.service';

import { Ingredient } from '../classes/Ingredient';

import { ModalComponent } from '../modal/modal.module';


declare var $:any;

@Component({
  templateUrl: './src/ingredients/ingredient.template.html'
})

export class IngredientComponent { 

	ingredient : Ingredient = new Ingredient({'_id':"1", 'name':"Loading"});
	originalIngredient : Ingredient;

	@ViewChild('deleteIngredientModal')
	deleteIngredientModal: ModalComponent;

	@ViewChild('ingredientForm')
	ingredientsForm;
	
	constructor ( private route : ActivatedRoute, private cache : CacheService, private router : Router, private IngredientsService: IngredientsService ) {

	}

	ngOnInit () {
		let id = this.route.snapshot.params['ingredientId'];
		if( this.cache.get( id )){
			this.ingredient = $.extend({}, this.cache.get( id ) );
		} else {
			this.IngredientsService.getIngredient( id ).then(
				(response : Ingredient ) => {
					this.ingredient = response;
					//TODO need to check for undefined and redirect to error page 
				},
				err => {
					alert(err.message);
				}
			);
		}
	}

	onSubmit () {

		//this.ingredient holds the edited values
		//ingredients.service.update??
		this.IngredientsService.updateIngredient(this.ingredient).then(
			( response ) => { this.onFinish(); },
			err => { alert(err.message); }
		);
		
	}

	onCancel () {
		if( this.ingredientsForm.pristine ) {
			this.onFinish();
		} else {
			if( confirm ("Are you sure you want to cancel?") ){
				this.onFinish();
			} else {

			}
		}
		
	}

	saveChanges () : Promise<Ingredient> {
		return this.IngredientsService.updateIngredient(this.ingredient);
	}

	onFinish () {
		this.router.navigate(['/manage/ingredients']);
	}

	//Delete Ingredient modal stuff//////////////////
	confirmDelete ( ) {
		this.deleteIngredientModal.open();
	}

	deleteIngredient ( ) {
		this.IngredientsService.deleteIngredient( this.ingredient.getId() ).then(
			( response ) => { this.onFinish(); },
			err => { alert(err.message); }
		);
		
	}
	/////////////////////////////////////////////////

}
