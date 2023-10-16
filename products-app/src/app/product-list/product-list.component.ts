import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productdata:Product[]=[];
  
  constructor(private service:ProductService,private router:Router){}

  ngOnInit(): void {
      this.productdata=this.service.getAllProducts();
  }

  onClick(id:number){
    this.router.navigate(['products',id])
  }
}
