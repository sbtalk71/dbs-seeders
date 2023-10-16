import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  selectedId!:number;
  selectedProduct:Product;
  constructor(private route:ActivatedRoute,private service:ProductService){

  }
  ngOnInit(): void {
      this.route.paramMap.subscribe((paramMap:ParamMap)=>{
        this.selectedId=+paramMap.get('id');
      });
     this.selectedProduct= this.service.findProductById(this.selectedId);
      
  }
}
