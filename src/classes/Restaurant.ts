import { Menu } from './Menu';
import { OpeningTimes } from './OpeningTimes';
import { Table } from './Table';

export class Restaurant {

	private _id : string;
	private name : string;
	private menu : Menu;
	private opening_times : OpeningTimes[];
	private tables : Table[];
	private logo_url : string;
	private location_numbername : string;
	private street_name: string;
	private city: string;
	private post_code : string;
	private county : string;
	private loc : number[];

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

	public getTables( ) : Table[] {
		return this.tables;
	}

	public setLogoUrl ( _url : string) {
		this.logo_url = _url;
	} 

	public getLogoUrl ( ) : string {
		return this.logo_url;
	}

	public getPostCode () : string {
		return this.post_code;
	}

	public setPostCode( _post_code : string) {
		this.post_code = _post_code;
	}

	public setLocation( _longitude : number, _latitude: number) {
		this.loc = [_latitude, _longitude];
	}

	public getLocation() :  number[] {
		return this.loc;
	}

	public getLocationNumberName() : string {
		return this.location_numbername;
	}

	public setLocationNumberName(_location_numbername: string) {
		this.location_numbername = _location_numbername;
	}

	public getStreetName() : string {
		return this.street_name;
	}

	public setStreetName( _streetName : string) {
		this.street_name = _streetName;
	}

	public getCity() : string {
		return this.city;
	}

	public setCity( _city : string ) {
		this.city = _city;
	}

	public getCounty() : string {
		return this.county;
	}

	public setCounty( _county : string ) {
		this.county = _county;
	}

}