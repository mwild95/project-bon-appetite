import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

import { ConstantsService } from './constants.service';

import { User } from '../user/User';

@Injectable()
export class RestService {

	private rest_server : string;

    constructor ( private ConstantsService : ConstantsService, private http : Http ) {
    	this.rest_server = this.ConstantsService.get( "REST_SERVER" );
    }

    

    //rest_server/user/login
    //Params
    	/*
			{
				"username" : "",
				"password" : ""
			}
    	*/
    // Returns
    	/*

    	*/
    public authenticate ( user : User ) : Observable<User> {
    	return this.http.post(this.rest_server + "users/login", user)
    		.map(res => res.json());
    }

    
}