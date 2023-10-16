import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit{
productForm:FormGroup;
constructor(private fb:FormBuilder){}

ngOnInit(): void {
    this.initForm();
}

initForm(){
  this.productForm=this.fb.group(
    {
        id:['',[Validators.required]],
        title:[],
        description:['',[Validators.maxLength(10)]],
        category:[],
        brand:[],
        rating:[],
        price:[],
        discountPercentage:[],
        stock:[]

    }
  );
}

get id(){
  return this.productForm.get('id');
}

get desc(){
  return this.productForm.get('description')
}

onSubmit(){
  console.log(this.productForm.value)
}
}
