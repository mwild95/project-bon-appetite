import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import { User } from '../user/user';

import { ConstantsService } from '../services/constants.service';
import { RestService } from '../services/rest.service';

@Injectable()
export class UserService {
    rest_server: string;
	loggedIn : boolean = false;
    user : User;
    redirectUrl: string;

    constructor ( private ConstantsService : ConstantsService, private http : Http, private restService : RestService ) {
        this.rest_server = this.ConstantsService.get( "REST_SERVER" );
    }

    public login ( user : User ) : Promise<any> {
        return new Promise( (resolve, reject) => {
            this.restService.authenticate( user )
                .subscribe(
                    userResponse => {
                        this.user = new User(userResponse);
                        this.loggedIn = true;
                        resolve( user );
                    },
                    err => {
                        reject(JSON.parse(err._body));
                    }
                );
        });

        /*return this.http.post(this.rest_server + "users/login", user)
            .map(res => res.json())
            .subscribe(
                userResponse => {
                    this.user = userResponse;
                    this.loggedIn = true;
                },
                err => { 
                    alert("Error (Deal with me) \n " + JSON.stringify(err));
                    this.loggedIn = false;
                },
                () => { }
            );*/
    }

    logout ( ) {
        this.loggedIn = false;
    }

    getUsername ( ) {
        return this.user.getUsername();
    }

    getId ( ) {
        return this.user.getId();
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