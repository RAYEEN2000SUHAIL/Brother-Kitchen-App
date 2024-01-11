import { CartIitems } from "./cartitems";

export class Cart {
    items: CartIitems[] = [];
    totalPrice: number = 0;
    totalCount: number = 0;
}