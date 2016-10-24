export class Menu {

	private _id : string;
	private name : string;
	

	constructor ( private menuJSON: {} ) {
		for( var jsonKey in this.menuJSON ) {
			this[jsonKey] = this.menuJSON[jsonKey];
		}
		delete this.menuJSON;
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