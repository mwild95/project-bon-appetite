import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { UserRoutes } from './user/user.routing';
import { DashboardRoutes } from './dashboard/dashboard.routing';

const routes: Routes = [
	...UserRoutes,
	...DashboardRoutes,
	//this needs to redirect to a homepage
	{path:'', component: DashboardComponent}
];

export const appRoutingProviders: any[] = [
	
];

export const routing = RouterModule.forRoot( routes );