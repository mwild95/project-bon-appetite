import { Injectable } from '@angular/core';
import { LoginService } from './login.service'; 

@Injectable()
export class UserService {

	loggedIn : boolean = false;
	username : string = "Test";
	password : string = "";

	constructor( ) {
		
	}

	login ( username : string, password : string ) {
		//this.loggedIn = loginService.login( username, password );

		return loggedIn;
	}

	logout ( ) {
		this.loggedIn = false;
	}

	getUsername ( ) {
		return this.username;
	}

	//need to return a user token rather than the password
	getUserToken ( ) {
		return this.password;
	}
}