"use strict";
var router_1 = require('@angular/router');
var appRoutes = [
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { path: 'login', component: LoginComponent },
    { path: 'user', component: UserComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map