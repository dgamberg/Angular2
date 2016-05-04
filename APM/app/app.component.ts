import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig } from 'angular2/router';

import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component';

@Component({
	selector: 'pm-app',
	template:`
		<ul>
			<li><a [routerLink]="['Welcome']" >Home</a></li>
			<li><a [routerLink]="['Products']">Product List</a></li>
		</ul>`,
	directives: [ProductListComponent, ROUTER_DIRECTIVES],
	providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]

})
@RouteConfig([
	{ path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
	{ path: '/products', name: 'Products', component: ProductListComponent }
])
export class AppComponent {
	pageTitle: string = 'Product Management'
}