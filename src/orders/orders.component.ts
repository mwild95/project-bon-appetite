import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { User } from '../user/user';
import { UserService } from '../services/user.service';

@Component({
  templateUrl: './src/orders/orders.template.html',
  styles: [':host{ display: flex;}'],
  styleUrls: ['./app/orders/orders.css']
})

export class OrdersComponent { 
	
	constructor( private router : Router ) {

	}
}

