import { Component } from '@angular/core';
import { exampleProducts } from '@paypal/products';

@Component({
  selector: 'paypal-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  products = exampleProducts;
}
