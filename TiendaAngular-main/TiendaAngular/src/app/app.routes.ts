import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent, title: "Home page"},
    { path: 'products/:productId', component: ProductDetailsComponent, title: "Product details"},
    { path: 'cart', component: CartComponent, title: "Cart" },
    { path: 'shipping', component: ShippingComponent, title: "Shipping"},

];
