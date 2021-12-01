import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Product} from "../models/product";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private productService:ProductService) { }
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

}
