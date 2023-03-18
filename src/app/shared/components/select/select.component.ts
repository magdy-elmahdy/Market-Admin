import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
    @Input() title:string ="";  //input عشان هستقبل داتا من للابن من الأب
    @Input() data:any;
    @Input() all:boolean=true;
    @Input() select:string='';
    @Output() selectedValue = new EventEmitter(); //output عشان هبعت داتا من الابن للأب
    constructor(){}

    filterCategory(event:any){     //كل ده عشان ابعت الايفت للأب بستعمل اوبجيكت EventEmitter
      this.selectedValue.emit(event)
    }
}
