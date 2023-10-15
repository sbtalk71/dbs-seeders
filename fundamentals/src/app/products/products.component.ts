import { Component,OnInit } from '@angular/core';
import { Product } from '../product';
import { data } from '../products-data';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{

  productdata:Product[]=[];
  
  constructor(private service:ProductService){}

  ngOnInit(): void {
      this.productdata=this.service.getAllProducts();
  }
}
