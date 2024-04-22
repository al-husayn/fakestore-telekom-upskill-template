import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public totalCartItem!: number;
  public constructor(private cartService: CartService) {}
  public ngOnInit(): void {
    this.cartService.getProducts().subscribe((data) => {
      this.totalCartItem = data.length;
    });
  }
}
