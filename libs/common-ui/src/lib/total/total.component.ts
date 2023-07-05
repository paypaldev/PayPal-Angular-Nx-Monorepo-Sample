import { Component, Input } from '@angular/core';
import { Product } from '@paypal/products';

@Component({
  selector: 'paypal-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss'],
})
export class TotalComponent {
  @Input() products:Product[] = [];

  getTotal(products: Product[]):number {
    let total = 0;

    products.forEach(p => {
      total += p.price * p.quantity;
    });

    return total;

  }


}
