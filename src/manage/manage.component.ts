import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../user/user';
import { UserService } from '../services/user.service';

@Component({
  templateUrl: './src/manage/manage.template.html'
})

export class ManageComponent { 
	
}

//TODO
//Add a REST call to authenticate user
//Inject UserService and Authenticate that way.
//Add a loading bar whilst submitting
//Add ticks and x's for feedback