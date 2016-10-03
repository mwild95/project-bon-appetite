import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user/user';
import { UserService } from '../services/user.service';

@Component({
  templateUrl: './src/login/login.template.html'
})

export class LoginComponent { 
	user = new User( "", "" );
	submitted:boolean = false;
	inProgress:boolean = false;
	hasError:boolean = false;
	error:string;

	constructor ( private router: Router, private userService: UserService ) {

	} 

	onSubmit ( ) {
		this.hasError = false;
		//This will eventually return a promise so we will need to wait for the promise to be returned
		let result : boolean = this.userService.login( this.user );
		this.submitted = true;
		this.inProgress = true;

		if( result ) {
			//if success....
			let redirectUrl : string = this.userService.getRedirectUrl();
			if( typeof redirectUrl != 'undefined') {
				//there is a link we need to redirect to rather than the standard
				this.router.navigate( [ redirectUrl ] );
			} else {
				this.router.navigate(["/dashboard"]);
			}
			
		} else {
			//something went wrong
			//currently trying to find the error is hard, but once the rest call has been implemented it will be
			//as easy as using success and fail operators
			this.error = "Username or Password was incorrect";
			this.hasError = true;
		}
		
	}
}

//TODO
//Add a REST call to authenticate user
//Inject UserService and Authenticate that way.
//Add a loading bar whilst submitting
//Add ticks and x's for feedback