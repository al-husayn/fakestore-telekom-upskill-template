import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductlistService {
  public constructor(private http: HttpClient) {}

  public getProduct() {
    return this.http.get<unknown>('https://fakestoreapi.com/products').pipe(
      map((response: unknown) => {
        return response;
      })
    );
  }
}
