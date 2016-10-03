export class User {
	constructor ( private username : string, private password : string ) { }

	getUsername ( ) {
		return this.username;
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