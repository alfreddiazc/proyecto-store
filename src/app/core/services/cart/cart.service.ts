import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Producto [] = []
  private cart = new BehaviorSubject<Producto[]>([])

  cart$ = this.cart.asObservable()
  
  constructor() { }

  addCart(product: Producto){
    this.products = [...this.products, product]
    this.cart.next(this.products);
  }

}
