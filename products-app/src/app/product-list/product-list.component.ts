import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  productdata:Product[]=[];
  
  constructor(private service:HttpService,private router:Router){}

  ngOnInit(): void {
      //this.productdata=this.service.getAllProducts();
      this.service.getProductsList().subscribe(data=>this.productdata=data);
  }

  onClick(id:number){
    this.router.navigate(['products',id])
  }
}
