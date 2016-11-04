import { RouterConfig } from '@angular/router';

import { OrdersComponent } from './orders.component';
import { PendingOrdersComponent } from './pending/pending.component';
import { CompleteOrdersComponent } from './complete/complete.component';

import { CanActivateViaUserService } from '../guards/loggedin.guard';

export const OrdersRoutes: RouterConfig = [
	{ path : 'orders/:restaurantId', component : OrdersComponent,  canActivate:[ CanActivateViaUserService ],
		children: [
			{ path:'', redirectTo:'pending', pathMatch: 'full'},
			{ path:'pending', component: PendingOrdersComponent },
			{ path:'complete', component: CompleteOrdersComponent }
		]	
	}
]