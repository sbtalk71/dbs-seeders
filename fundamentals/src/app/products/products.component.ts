import { Component } from '@angular/core';
import { Product } from '../product';
import { data } from '../products-data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  productdata:Product[]=data;
  
}
