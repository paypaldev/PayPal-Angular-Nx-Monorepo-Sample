import { Component } from '@angular/core';
import { Product, exampleProducts } from '@paypal/products';

@Component({
  selector: 'paypal-root',
  template: `
    <div class="container">
      <div class="column--left">
        <paypal-payment />
      </div>
      <div class="column--right">
        <paypal-cart [products]=products/>
        <paypal-total [products]=products/>
      </div>
    </div>
  `,
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  products: Product[] = exampleProducts;
}
