import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CartComponent, PaymentComponent],
  exports: [CartComponent, PaymentComponent],
})
export class CommonUiModule {}
