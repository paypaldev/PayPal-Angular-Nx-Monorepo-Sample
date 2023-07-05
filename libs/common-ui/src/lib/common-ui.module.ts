import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { TotalComponent } from './total/total.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CartComponent, PaymentComponent, TotalComponent],
  exports: [CartComponent, PaymentComponent, TotalComponent],
})
export class CommonUiModule {}
