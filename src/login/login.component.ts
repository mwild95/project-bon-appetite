import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user/user';
import { UserService } from '../services/user.service';

@Component({
  templateUrl: './src/login/login.template.html',
  styleUrls : ['./app/login/login.css']
})

export class LoginComponent { 
	user = new User( {} );
	submitted:boolean = false;
	inProgress:boolean = false;
	hasError:boolean = false;
	error:string;

	constructor ( private router: Router, private userService: UserService ) {

	} 

	onSubmit ( ) {
		this.hasError = false;
		this.submitted = true;
		this.inProgress = true;
		this.userService.login( this.user ).then(
			result => {
				if ( typeof result.username != 'undefined' ) {
					let redirectUrl : string = this.userService.getRedirectUrl();
					if( typeof redirectUrl != 'undefined') {
						//there is a link we need to redirect to rather than the standard
						this.router.navigate( [ redirectUrl ] );
					} else {
						this.router.navigate(["/dashboard"]);
					}
				}
				this.inProgress = false;
			},
			err => {
				this.error = err.message;
				this.hasError = true;
				this.inProgress = false;
			}
		);
		
	}
}

//TODO
//Add a REST call to authenticate user
//Inject UserService and Authenticate that way.
//Add a loading bar whilst submitting
//Add ticks and x's for feedback