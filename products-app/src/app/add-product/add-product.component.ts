import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  productForm:FormGroup;
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
    console.log(this.productForm.value);
  }
}
