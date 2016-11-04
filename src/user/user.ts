export class User {

	private _id : string;
	private username: string;
	private password: string;
	private email:	  string;

	constructor ( private userJSON : {} ) {
		for(var jsonKey in userJSON) {
			this[jsonKey] = userJSON[jsonKey];
		}
	}

	getUsername ( ) {
		return this.username;
	}

	getId ( ) {
		return this._id;
	}

	isTheSameAs ( userToCheck : User ) {
		if( this.username == userToCheck.username ){
			if( this.password == userToCheck.password ){
				//authentication succeeded, return true
				return true;
			}
		}

		return false;
	}
}