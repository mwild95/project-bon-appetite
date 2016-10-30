export class Ingredient {

	private _id : string;
	private name : string;
	

	constructor ( private ingredientJSON: {} ) {
		for( var jsonKey in this.ingredientJSON ) {
			this[jsonKey] = this.ingredientJSON[jsonKey];
		}
		delete this.ingredientJSON;
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

}