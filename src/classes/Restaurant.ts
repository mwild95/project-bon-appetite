import { Menu } from './Menu';

export class Restaurant {

	constructor ( private id: string, private name: string, private menu?: Menu ) {

	}

	public getId() : string {
		return this.id;
	}

	public setId( _id : string ) {
		this.id = _id;
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