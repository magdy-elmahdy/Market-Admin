import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
declare var $:any

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {
  loading:boolean=false;
  products:any[] = [];
  product:any[]=[]
  categories:string[] = [];
  cartProducts:any[]=[];
  productExisted:string ="";
  handelError:any;
  base64: any;
  update:boolean=false;
  add:boolean=false
  id: any;

  form:FormGroup = new FormGroup({
    'title':new FormControl(null,[Validators.required]),
    'price':new FormControl(null,[Validators.required]),
    'description':new FormControl(null,[Validators.required]),
    'image':new FormControl(null,[Validators.required]),
    'category':new FormControl(null,[Validators.required])
  })
  

  constructor(private _ProductsService: ProductsService) {
    this.getProducts();     //this point to class
    this.getAllCategories(); //this بستعملها لما اكون جوا حاجه وعايز انادي علي حاجه من بره 
  }

  getProducts() {
    this.loading=true;
    this._ProductsService.getAllProducts().subscribe((data:any) => {
      this.loading=false;
      this.products = data;
    },(error=>{
    this.loading=true;
      alert(error)
    }) );
  }

  getAllCategories(){
    this.loading=true;
    this._ProductsService.getAllCategories().subscribe((data:any)=>{
      this.loading=false;
      this.categories= data;
    })
  }

  filterCategory(event:any){
    this.form.get('category')?.setValue(event.target.value);//بجيب العنصر من الفوم وبديله الفاليو  
  }

  getSpecificCategory(keyword:string){
    this.loading=true;
    this._ProductsService.getProductsByCategory(keyword).subscribe((data:any)=>{
      this.loading=false;
      this.products=data;
    })
  }

  getImagePath(event:any){
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>{
      this.base64 = reader.result;
      this.form.get('image')?.setValue("this.base64")
    } 
  }

  addProdct(){
    this.form.reset();
    let Model = this.form.value;
    this._ProductsService.createProduct(Model).subscribe( (res) =>{
      alert("Added Product Successfully");
    })
    $("#exampleModalToggle").modal('toggle');
  }

  updateProduct(i:any){
    this.form.get("title")?.setValue(this.products[i].title)
    this.form.get("price")?.setValue(this.products[i].price)
    this.form.get("description")?.setValue(this.products[i].description)
    this.form.get("image")?.setValue(this.products[i].image)
    this.base64 = this.products[i].image
    this.form.get("category")?.setValue(this.products[i].category);
    this.id=this.products[i].id



  }
  updatePro(){

    console.log(this.product);
    let Model = {
      "title":this.form.value.title,
      "price":this.form.value.price,
      "description":this.form.value.description,
      "image":this.form.value.image,
      "category":this.form.value.category
    }
    this._ProductsService.update(this.id,Model).subscribe( (res)=>{
      alert("Updated Successfully")
    })
    $("#exampleModalTogglee").modal('toggle');
    this.form.reset();

  }
}
