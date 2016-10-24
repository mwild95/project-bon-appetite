import { Menu } from './Menu';

export class Restaurant {

	private _id : string;
	private name : string;
	private menu : Menu;

	constructor ( private restaurantJSON: {} ) {
		for( var jsonKey in this.restaurantJSON ) {
			if (jsonKey == "menu" && this.restaurantJSON[jsonKey] != null) {
				this.restaurantJSON['menu']= new Menu(this.restaurantJSON['menu']);
			}
			this[jsonKey] = this.restaurantJSON[jsonKey];
		}
		delete this.restaurantJSON;
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

	public getMenu () {
		return this.menu;
	}

	public setMenu ( _menu:Menu ) {
		this.menu = _menu;
	}
}