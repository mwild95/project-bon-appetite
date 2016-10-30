import { Component, ViewChild } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Ingredient } from '../classes/Ingredient';
import { IngredientsService } from '../services/ingredients.service';

import { CacheService } from '../services/cache.service';

import { ModalComponent } from '../modal/modal.module';

@Component({
  templateUrl: './src/ingredients/ingredientList.template.html'
})

export class IngredientListComponent { 
	
	ingredients : Ingredient[];

	@ViewChild('newIngredientModal')
	newIngredientModal: ModalComponent;

	constructor ( private ingredientService : IngredientsService, private cache : CacheService, private router : Router ) {

	}

	ngOnInit () {
		this.ingredientService.getIngredients().then(
			( response ) => { this.ingredients = response },
			( err ) => { alert( err.message ); }
		);
	}

	selectIngredient ( ingredient : Ingredient ) {
		this.cache.put( ingredient.getId(), ingredient );
		this.router.navigate(['/manage/ingredients', ingredient.getId()]);
	}

	//add new ingredient modal stuff/////////////////////////////
	addNewIngredient ( ) {
		this.newIngredientModal.open();
	}

	createNewIngredient ( ingredientName: string ) {
		this.ingredientService.createIngredient( ingredientName ).then(
			(response) => { this.selectIngredient( response ); },
			(err) => {alert(err.message)}
		);
	}
	///////////////////////////////////////////////////////
}
