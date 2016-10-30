import { Ingredient } from './Ingredient.ts';

export class Product {

	private _id : string;
	private name : string;
	private description : string;
	private price : Number;
	private ingredients : Ingredient[];

	private pristine : boolean = false;
	

	constructor ( private productJSON: {} ) {
		for( var jsonKey in this.productJSON ) {
			this[jsonKey] = this.productJSON[jsonKey];
		}
		delete this.productJSON;
	}

	public getId() : string {
		return this._id;
	}

	public setId( id : string ) {
		this._id = id;
	}

	public getName () {
		return this.name;
	} 

	public setName ( _name:string ) {
		this.name = _name;
	}

	public getDescription () : string {
		return this.description;
	}

	public setDescription ( _description : string ) {
		this.description = _description;
	}

	public getPrice () : Number {
		return this.price;
	}

	public setPrice ( _price : Number ) {
		this.price = _price;
	}

	public getIngredients () : Ingredient[] {
		return this.ingredients;
	}

	public setIngredients ( _ingredients : Ingredient[] ) {
		this.ingredients = _ingredients;
	}

	public addIngredient ( _ingredient : Ingredient ) {
		this.ingredients.push(_ingredient);
		this.pristine = false;
	}

	public isPristine ( ) {
		return this.pristine;
	}


}