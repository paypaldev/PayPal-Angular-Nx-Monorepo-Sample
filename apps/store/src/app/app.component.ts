import { Component } from '@angular/core';
import { Product, exampleProducts } from '@paypal/products';

@Component({
  selector: 'paypal-root',
  template: `
    <div class="container">
      <div class="column--right">
        <paypal-cart [products]=products/>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  products: Product[] = exampleProducts;
}
