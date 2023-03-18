import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl:string="https://fakestoreapi.com/";
  constructor(private _HttpClient:HttpClient) { }

  getAllCarts(date?:any){
    let params = new HttpParams()
    params = params.append('startDate',date?.start).append('endDate',date?.end)
    return this._HttpClient.get(this.baseUrl+'carts', {params});
  }
  
  deleteCart(id:number){
    return this._HttpClient.delete(this.baseUrl+'carts/'+id)
  }

}
