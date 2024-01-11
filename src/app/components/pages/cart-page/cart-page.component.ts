import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/cart';
import { CartIitems } from 'src/app/shared/models/cartitems';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!: Cart;
  constructor(private cartService: CartService) {
    cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }

  removeFromCart(cartItem: CartIitems) {
    this.cartService.removeFromCart(cartItem.food.id);
  }
  changeQuantity(cartItem: CartIitems, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity); 
  }
}
