import { Menu } from './Menu';
import { OpeningTimes } from './OpeningTimes';
import { Table } from './Table';

export class Restaurant {

	private _id : string;
	private name : string;
	private menu : Menu;
	private opening_times : OpeningTimes[];
	private tables : Table[]

	constructor ( private restaurantJSON: {} ) {
		for( var jsonKey in this.restaurantJSON ) {
			if (jsonKey == "menu" && this.restaurantJSON[jsonKey] != null) {
				this.restaurantJSON['menu']= new Menu(this.restaurantJSON['menu']);
			}
			if( jsonKey == "opening_times" && this.restaurantJSON[jsonKey] != null ) {
				for(var openingTimeID in this.restaurantJSON[jsonKey] ) {
					this.restaurantJSON[jsonKey][openingTimeID] = ( new OpeningTimes( this.restaurantJSON[jsonKey][openingTimeID] ));
				}
			}

			if( jsonKey == "tables" && this.restaurantJSON[jsonKey] != null ) {
				for(var tableId in this.restaurantJSON[jsonKey] ){
					this.restaurantJSON[jsonKey][tableId] = new Table(this.restaurantJSON[jsonKey][tableId]);
				}
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

	public getOpeningTimes ( ) : Object[] {
		return this.opening_times;
	}

	public setOpeningTimes ( _openingTimes : OpeningTimes[] ) {
		this.opening_times = _openingTimes;
	}

	public addOpeningTime ( _openingTime : OpeningTimes ) {
		this.opening_times.push( _openingTime );
	}

	public addTable ( _table : Table ) {
		this.tables.push(_table);
	}
}