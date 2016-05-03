import { Component } from 'angular2/core';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';

@Component({
	selector: 'pm-app',
	template:`
		<div>
			<h2>{{pageTitle}}</h2>
			<pm-products></pm-products>
		</div>`,
	directives: [ProductListComponent],
	providers: [ProductService]

})
export class AppComponent {
	pageTitle: string = 'Product Management'
}