import { Product } from './Product';
export class Section {

	private _id : string;
	private name : string;
	private description : string;
	private products : Product[];

	constructor ( private sectionJSON: {} ) {
		for( var jsonKey in this.sectionJSON ) {
			this[jsonKey] = this.sectionJSON[jsonKey];
		}
		delete this.sectionJSON;
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

	public getProducts () {
		return this.products;
	}

	public setProducts ( _products:Product[] ) {
		this.products = _products;
	}

	public addProduct ( _product : Product ) {
		this.products.push(_product);
	}
}