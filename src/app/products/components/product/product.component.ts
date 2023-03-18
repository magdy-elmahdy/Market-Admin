import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

    @Input() data:any ={};//Input عشان انا ف الابن وعايز استقبل داتا من الأب
    @Output() item = new EventEmitter(); //Output عشان انا ف الابن وعايز ابعت داتا لل الأب
    addButton:boolean=false;
    amount:number=0;
    constructor(){}


    add(){
      this.item.emit({item:this.data ,quantity:this.amount});      
    }
}
