import { RouterConfig } from '@angular/router';

import { LoginComponent } from './login.component';
import { SignUpComponent } from './signup.component';

export const LoginRoutes: RouterConfig = [
	{ path : 'login', component : LoginComponent },
	{ path : 'signup', component: SignUpComponent }
]