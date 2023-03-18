import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public _httpClient:HttpClient) { }

  baseUrl="https://fakestoreapi.com/";
  getAllProducts():Observable<any>
  {
    return this._httpClient.get(this.baseUrl+"products");
  }

  getAllCategories(){
    return this._httpClient.get(this.baseUrl+"products/categories");
  }

  getProductsByCategory(keyword:string){
    return this._httpClient.get(this.baseUrl+'products/category/'+keyword);
  }

  getProductbyId(keyword:any){
    return this._httpClient.get(this.baseUrl+'products/'+keyword)
  }

  createProduct(model:any){
    return this._httpClient.post(this.baseUrl+'products' , model)
  }

  update(id:any ,model:any){
    return this._httpClient.put(this.baseUrl+'products/'+ id ,model)
  }

}
