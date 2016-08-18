import { Injectable } from '@angular/core';
import { LoginService } from './login.service'; 

@Injectable()
class UserService {
	constructor( loginService: LoginService ) {
		loginService.login();
	}
}