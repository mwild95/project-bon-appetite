import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
	login() {
		return true;
	}

	logout() {
		return true;
	}

	validateUsername( username:string ) {
		return true;
	}

	validatePassword( password:string ) {
		return true;
	}
}

