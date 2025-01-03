import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  storageKey: string = 'shoppingCart'

  constructor() { }

  // USAGE => use to get all products in cart
  getCartItems(): Array<any> {
    const listItems = localStorage.getItem(this.storageKey);
    return listItems ? JSON.parse(listItems) : []
  }

  // USAGE => use to add new product to cart
  addToCart(item: any) {
    let cartList = this.getCartItems()
    cartList.push(item);
    localStorage.setItem(this.storageKey, JSON.stringify(cartList))

  }

  // USAGE => use to delete product form cart that saved in local storage
  deleteFromCart(productId: any) {
    let cartList = this.getCartItems();
    let filteredList = cartList.filter(ele => { ele?.productId !== productId })
    localStorage.setItem(this.storageKey, JSON.stringify(filteredList));
  }

  // USAGE => use to clear cart from all products
  emptyCart() {
    localStorage.clear();
  }
}
