import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from "./components/all-products/AllProductsComponent";
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './components/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { SelectComponent } from '../shared/components/select/select.component';



@NgModule({
    declarations: [
        AllProductsComponent,
        ProductsDetailsComponent,
        ProductComponent
    ],
    exports: [
        AllProductsComponent,
        ProductsDetailsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule
    ]
})
export class ProductsModule { }
