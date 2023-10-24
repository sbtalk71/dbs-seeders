import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../product';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  selectedId!:number;
  selectedProduct:Product;
  constructor(private route:ActivatedRoute,private service:HttpService){

  }
  ngOnInit(): void {
      this.route.paramMap.subscribe((paramMap:ParamMap)=>{
        this.selectedId=+paramMap.get('id');
      });
     this.service.findProductById(this.selectedId).subscribe(data=>this.selectedProduct=data);
      
  }
}
