import { Injectable } from '@angular/core';
import { CanActivate, Router,
         ActivatedRouteSnapshot,
         RouterStateSnapshot }    from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable()
export class CanActivateViaUserService implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
  	if ( this.userService.isAuthenticated() ) { return true; }

  	this.userService.setRedirect( state.url );
  	console.log(state.url);

  	this.router.navigate(['/login']);
  	return false;
  }
}