import { Component } from '@angular/core';
import { Product, exampleProducts } from '@paypal/products';

@Component({
  selector: 'paypal-root',
  template: `
    <div class="container">
      <paypal-cart [products]=products/>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  products: Product[] = exampleProducts;
}
