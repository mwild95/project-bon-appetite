import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './general/pagenotfound.component';

import { UserRoutes } from './user/user.routing';
import { DashboardRoutes } from './dashboard/dashboard.routing';
import { LoginRoutes } from './login/login.routing';
import { ManageRoutes } from './manage/manage.routing';
import { OrdersRoutes } from './orders/orders.routing';

import { CanActivateViaUserService } from './guards/loggedin.guard';

const routes: Routes = [
	...UserRoutes,
	...DashboardRoutes,
	...LoginRoutes,
	...ManageRoutes,
	...OrdersRoutes,
	//this needs to redirect to a homepage
	{path:'', component: HomeComponent },
	{path:'**', component: PageNotFoundComponent}
];

export const appRoutingProviders: any[] = [
	
];

export const routing = RouterModule.forRoot( routes );