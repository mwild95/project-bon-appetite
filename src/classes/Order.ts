import { Product } from './Product';
import { OrderStatus } from './OrderStatus';

export class Order {

	private _id : string;
	private products : Product[];
	private restaurant : string;
	private status : OrderStatus;

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

	public getProducts ( ) : Product[] {
		return this.products;
	}

	public setProducts ( _products: Product[] ) : void {
		this.products = _products;
	}

	public addProduct ( _product : Product ) : void {
		this.products.push( _product );
	} 

	public getStatus ( ) : OrderStatus {
		return this.status;
	}

	public setStatus ( _status : OrderStatus ) : void {
		this.status = _status;
	}

}

