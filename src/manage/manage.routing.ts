import { RouterConfig } from '@angular/router';

import { ManageComponent } from './manage.component';
import { RestaurantsListComponent } from '../restaurants/restaurantsList.component';
import { RestaurantComponent } from '../restaurants/restaurant.component';
import { MenuListComponent } from '../menus/menuList.component';
import { MenuComponent } from '../menus/menu.component';
import { IngredientListComponent } from '../ingredients/ingredientList.component';
import { IngredientComponent } from '../ingredients/ingredient.component';
import { ProductsListComponent } from '../products/productsList.component';
import { ProductComponent } from '../products/product.component';
import { SectionsListComponent } from '../sections/sectionsList.component';
import { SectionComponent } from '../sections/section.component';

import { CanActivateViaUserService } from '../guards/loggedin.guard';

export const ManageRoutes: RouterConfig = [
	{ path : 'manage', component : ManageComponent,  canActivate:[ CanActivateViaUserService ],
		children: [
			{ path:'', redirectTo:'/manage/restaurants', pathMatch: 'full'},
			{ path:'restaurants', component: RestaurantsListComponent },
			{ path:'restaurants/:restaurantId', component: RestaurantComponent },
			{ path:'menus', component: MenuListComponent },
			{ path:'menus/:menuId', component: MenuComponent },
			{ path:'ingredients', component: IngredientListComponent },
			{ path:'ingredients/:ingredientId', component: IngredientComponent },
			{ path:'products', component: ProductsListComponent },
			{ path:'products/:productId', component: ProductComponent },
			{ path:'sections', component: SectionsListComponent },
			{ path:'sections/:sectionId', component: SectionComponent },
		]	
	}
]