import { Component, Input } from '@angular/core';
import {Product} from '@paypal/products'
@Component({
  selector: 'paypal-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  @Input() products : Product[] = [];
}
