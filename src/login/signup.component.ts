import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { User } from '../user/user';
import { UserService } from '../services/user.service';

@Component({
  templateUrl: './src/login/signup.template.html',
  styleUrls : []
})

export class SignUpComponent { 
	user = new User( {} );
	submitted:boolean = false;
	inProgress:boolean = false;
	hasError:boolean = false;
	error:string;
	completedSuccessfully: boolean = false;

	constructor ( private router: Router, private userService: UserService ) {

	} 

	onSubmit ( ) {
		this.userService.createUser( this.user ).then(
			result => {
				this.completedSuccessfully = true;
			},
			err => {
				this.error = err.message;
				this.hasError = true;
				this.inProgress = false;
			}
		);
		
	}
}

