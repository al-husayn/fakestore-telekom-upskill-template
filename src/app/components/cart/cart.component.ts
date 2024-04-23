import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  public products: any = [];
  public grandtotal!: number;
  public removeCartItem: any;
  public constructor(private cartService: CartService) {}
  public ngOnInit(): void {
    this.cartService.getProducts().subscribe((data) => {
      this.products = data;
      this.grandtotal = this.cartService.getTotalPrice();
    });
  }
  public removeItem(product: any) {
    this.cartService.removeCartItem(product);
  }
  public emptyCart() {
    this.cartService.removeAllCart();
  }
}
