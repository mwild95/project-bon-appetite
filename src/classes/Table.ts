import { User } from '../user/user'

export class Table {

	private _id : string;
	private name : string;
	private capacity : number;
	private occupants : User[];

	constructor ( private tableJSON: {} ) {
		for( var jsonKey in this.tableJSON ) {
			this[jsonKey] = this.tableJSON[jsonKey];
		}
		delete this.tableJSON;
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

	public getCapacity () {
		if(this.capacity) {
			return this.capacity;
		}
		return "N/A";
		
	}

	public setCapacity ( _capacity : number ) {
		this.capacity = _capacity;
	}

	public getOccupants ( ) {
		return this.occupants;
	}

}