import { RouterConfig } from '@angular/router';

import { ManageComponent } from './manage.component';
import { RestaurantsListComponent } from '../restaurants/restaurantsList.component';
import { RestaurantComponent } from '../restaurants/restaurant.component';
import { MenuListComponent } from '../menus/menuList.component';
import { MenuComponent } from '../menus/menu.component';

import { CanActivateViaUserService } from '../guards/loggedin.guard';

export const ManageRoutes: RouterConfig = [
	{ path : 'manage', component : ManageComponent,  canActivate:[ CanActivateViaUserService ],
		children: [
			{ path:'', redirectTo:'/manage/restaurants', pathMatch: 'full'},
			{ path:'restaurants', component: RestaurantsListComponent },
			{ path:'restaurants/:restaurantId', component: RestaurantComponent },
			{ path:'menus', component: MenuListComponent },
			{ path:'menus/:menuId', component: MenuComponent }
		]	
	}
]