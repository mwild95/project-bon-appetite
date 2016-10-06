import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './src/navbar/navbar.template.html',
})

export class NavbarComponent { 
	constructor ( private userService:UserService, private router: Router ) {
	}

	logout () {
		this.userService.logout();
		this.router.navigate(['/login']);
	}
}