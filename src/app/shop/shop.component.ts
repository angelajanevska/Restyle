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

  constructor(private productService:ProductService,private Activatedroute: ActivatedRoute) { }

  isDataLoaded:boolean=false;
  productList:any;

   ngOnInit(): void {
    this.productService.getProducts().then(result => {
      this.productList = result;
      this.isDataLoaded=true;
    })
  }

  onSubmit(){

  }

  onFilter(){
     const {size,type,gender} = this.filterForm.value;
    console.log(size,type,gender);
    //this.productList=this.productService.getAllProductsWithSize(size);
    //let r=this.productList
    //this.productList=this.productService.getAllProductsByFilter(size,gender,type)
    this.productService.getProducts().then(result => {
        if (this.filterForm.value.size != null) {
          result = result.filter(x => x.size == this.filterForm.value.size);
        }
        //this.filterForm.value.category.indexOf(0)
        if (gender != null) {
          result = result.filter(x => x.category.some(d => d == gender));
        }
        if (type != null) {
          result = result.filter(x => x.category.some(d => d == type));
        }
        this.productList = result;
      });

  }

}
