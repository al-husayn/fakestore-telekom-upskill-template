import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductlistService } from 'src/app/services/productlist.service';

interface Product {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  rating: { count: number; rate: number };
  title: string;
  total: number;
}

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  public product: Product | undefined;

  public constructor(
    private route: ActivatedRoute,
    private productService: ProductlistService,
    private cartService: CartService
  ) {}

  public ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct().subscribe((data: unknown) => {
      this.product = (data as Product[]).find((a: Product) => a.id === id);
      console.log('YYYY', this.product);
    });
  }
  public addtocart(item: any) {
    this.cartService.addtoCart(item);
  }
}
