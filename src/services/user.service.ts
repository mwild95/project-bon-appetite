import { Injectable } from '@angular/core';

import { User } from '../user/user';

@Injectable()
export class UserService {
	loggedIn : boolean = false;
    user : User = new User("admin", "admin");
    redirectUrl: string;

    constructor( ) {

    }

    login ( user : User ) {
        this.loggedIn = this.user.isTheSameAs( user );
        return this.loggedIn;
    }

    logout ( ) {
        this.loggedIn = false;
    }

    getUsername ( ) {
        return this.user.getUsername();
    }

    isAuthenticated ( ) {
    	return this.loggedIn;
    }

    setRedirect( url: string ) {
        this.redirectUrl = url;
    }

    getRedirectUrl ( ) {
        return this.redirectUrl;
    }
    
}