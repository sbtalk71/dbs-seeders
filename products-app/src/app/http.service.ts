import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private base_url='http://localhost:3000/products/'

  constructor(private http:HttpClient) { }

  getProductsList():Observable<Product[]>{
    return this.http.get<Product[]>(this.base_url,{ 'headers': {'Accept':'application/xml','Authorization':'Basic '+'abcdsuug'} });
  }

  findProductById(id:number): Observable<Product>{
    return this.http.get<Product>(this.base_url+id);
  }

  addProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(this.base_url,product,);
  }
}
