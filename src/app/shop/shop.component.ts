import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../models/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  filterForm = new FormGroup({
    gender: new FormControl(''),
    type: new FormControl(''),
    size: new FormControl(''),
  });

  //sub:any;

  constructor(private productService:ProductService) { }

  isDataLoaded:boolean=false;
  productList:any;

   ngOnInit(): void {
    this.productService.getProducts().then(result => {
      this.productList = result;
      this.isDataLoaded=true;
    })
     window.scrollTo(0, 0)
   }
  p:any;

  onSubmit(){

  }
  allProducts(){
    if (this.filterForm.valid) {
      console.log("Form Submitted!");
      this.filterForm.reset();
    }
    this.productService.getProducts().then(result => {
      this.productList = result;
    })
  }


  onFilter(){
    const {size,type,gender} = this.filterForm.value;
    let x = this.productService.getFromLocalStorage();
    if (size != null) {
      x = x.filter((x:any) => x.size == size);
    }
    if (gender != null) {
      x = x.filter((x:any) => x.category.some((d:any) => d.toLowerCase() == gender));
    }
    if (type != null) {
      x = x.filter((x:any) => x.category.some((d:any) => d.toLowerCase() == type));
    }

    this.productList = x;
  }

}
