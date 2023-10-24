import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { HttpService } from '../http.service';
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  productForm:FormGroup;
  constructor(private service:HttpService){}

  ngOnInit(): void {
     this.initForm();
  }

  initForm(){
    this.productForm=new FormGroup({
      id:new FormControl('',Validators.required),
      title:new FormControl(),
      description:new FormControl('',Validators.maxLength(10)),
      category:new FormControl(),
      brand:new FormControl(),
      rating: new FormControl(),
      price:new FormControl(),
      discountPercentage:new FormControl(),
      stock:new FormControl()
    });
  }

  get id(){
    return this.productForm.get('id');
  }

  get desc(){
    return this.productForm.get('description');
  }
  onSubmit(){
    let data=this.productForm.value;
    let product:Product={id:+data.id,title:data.title,
      category:data.category,brand:data.brand,
      price:+data.price,stock:+data.stock,discountPercentage:+data.discountPercentage,
      description:data.description,rating:+data.rating
    }
    this.service.addProduct(product).subscribe(data=>{
      console.log(data);
    })
    //console.log(this.productForm.value);
  }
}
