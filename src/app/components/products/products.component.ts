import { Component, OnInit } from '@angular/core';
import { ProductlistService } from 'src/app/services/productlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productsList: any;

  public constructor(private products: ProductlistService) {}

  public ngOnInit(): void {
    this.products.getProduct().subscribe((response) => {
      this.productsList = response;
      console.log(this.productsList);
    });
  }
}
