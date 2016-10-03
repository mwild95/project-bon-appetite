import { RouterConfig } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

import { CanActivateViaUserService } from '../guards/loggedin.guard';

export const DashboardRoutes: RouterConfig = [
	{ path : 'dashboard', component : DashboardComponent, canActivate: [CanActivateViaUserService] }
]