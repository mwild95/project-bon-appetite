import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserRoutes } from './user/user.routing';

const routes: Routes = [
	...UserRoutes,
	//this needs to redirect to a homepage
	{path:'', component:AppComponent}
];

export const appRoutingProviders: any[] = [
	
];

export const routing = RouterModule.forRoot( routes );