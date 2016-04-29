import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';

@Component({
	selector: 'pm-app',
	template:`
		<div>
			<h2>{{pageTitle}}</h2>
			<pm-products></pm-products>
		</div>`,
	directives: [ProductListComponent]

})
export class AppComponent {
	pageTitle: string = 'Product Management'
}