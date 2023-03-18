import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../../services/cart.service';
import {ProductsService} from '../../../products/services/products.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  
  form:FormGroup =new FormGroup({
    'start': new FormControl(),
    'end': new FormControl()
  })
  carts:any[]=[];
  spinner:boolean=false;
  products:any[]=[];
  total:any

  constructor(private _CartService:CartService , private _ProductService:ProductsService){
    this.getCarts();
  }

  getCarts(){
    this.spinner=true;
    this._CartService.getAllCarts().subscribe((res:any)=>{
    this.spinner=false;
     this.carts = res
    })

  }
  getStartEndDates(){
    // this.end=foRm.controls.end.value;
    // this.start=foRm.controls.start.value;
    // console.log(foRm.value);
    let date = this.form.value;
    this._CartService.getAllCarts(date).subscribe((res:any)=>{
       this.carts = res    
    }) 
  }

  deleteCart(id:any){
    this._CartService.deleteCart(id).subscribe(res=>{
      alert("This Cart Deleted Successfully");
      this.getCarts();
    })
  }
  view(cart:any){
    this.products=[];
    for(let i in cart.products){
      this._ProductService.getProductbyId(cart.products[i].productId).subscribe(res =>{
        this.products.push({item:res , quantity:cart.products[i].quantity})
      })
    }
  }
  // vieww(index:number){
  //   console.log(this.carts[index].products);
  // }
    
  }
