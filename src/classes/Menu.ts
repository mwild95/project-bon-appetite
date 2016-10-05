export class Menu {

	constructor ( private id: string, private name: string ) {

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

}