
export class OpeningTimes {

	//private _id : string;
	private days : string[];
	private open : string;
	private close : string;

	constructor ( private openingTimesJSON: {} ) {
		for( var jsonKey in this.openingTimesJSON ) {
			this[jsonKey] = this.openingTimesJSON[jsonKey];
		}
		delete this.openingTimesJSON;
	}

	public getDays ( ) {
		return this.days;
	}

	public setDays ( _days ) {
		this.days = _days;
	}

	public addDay ( _day ) {
		this.days.push(_day);
	}

	public removeDay( _day ) {
		this.days.splice( this.days.indexOf(_day),1 );
	}

	public getOpen ( ) {
		return this.open;
	}

	public setOpen ( _open ) {
		this.open = _open;
	}

	public getClose ( ) {
		return this.close;
	}

	public setClose ( _close ) {
		this.close = _close;
	}
}