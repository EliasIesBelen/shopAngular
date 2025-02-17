import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { Product } from '../products';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  checkoutForm: FormGroup;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {

    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  get items(): Product[] {
    return this.cartService.getItems();
  }

  onSubmit(): void {
    this.cartService.clearCart();
    console.log('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
