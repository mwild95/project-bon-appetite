import { Section } from './Section';

export class Menu {

	private _id : string;
	private name : string;
	private sections : Section[];
	

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

	public getSections ( ) : Section[] {
		return this.sections;
	}

	public setSections ( _sections:Section[] ) {
		this.sections = _sections;
	}

	public addSection ( _section:Section ) {
		this.sections.push(_section);
	}

}