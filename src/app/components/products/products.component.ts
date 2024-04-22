import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductlistService } from 'src/app/services/productlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productsList: any;

  public constructor(
    private products: ProductlistService,
    private cartService: CartService
  ) {}

  public ngOnInit(): void {
    this.products.getProduct().subscribe((response) => {
      this.productsList = response;
      this.productsList.forEach((item: any) => {
        Object.assign(item, { quantity: 1, total: item.price });
      });
      console.log(this.productsList);
    });
  }
  public addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
}
