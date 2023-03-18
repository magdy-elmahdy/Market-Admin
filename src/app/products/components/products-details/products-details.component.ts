import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent {
    id:any;
    details:any={};
    loading:boolean=false;
    constructor(private _ActivatedRoute:ActivatedRoute, private _ProductsService:ProductsService){
      this.id=this._ActivatedRoute.snapshot.paramMap.get("id");
    }
    ngOnInit():void{
      this.getProductDetails();      
    }

    getProductDetails(){
      this.loading=true;
      this._ProductsService.getProductbyId(this.id).subscribe((data:any)=>{
        this.loading=false;
        this.details=data;
      })
    }
    
}
