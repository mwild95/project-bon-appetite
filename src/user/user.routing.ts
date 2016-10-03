import { RouterConfig } from '@angular/router';

import { UserComponent } from './user.component';

import { CanActivateViaUserService } from '../guards/loggedin.guard';

export const UserRoutes: RouterConfig = [
	{ path : 'user', component : UserComponent, canActivate:[ CanActivateViaUserService ] }
]