import { Injectable } from '@angular/core';
import { Product } from './product';
import { data } from './products-data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productData:Product[]=data;
  constructor() { }

  getAllProducts(): Product[]{
    return this.productData;
  }

}
