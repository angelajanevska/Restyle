import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productService:ProductService) { }
  isDataLoaded:boolean=false;
  productList:any;
  reverseList:any;
  ngOnInit(): void {
    this.productService.getProducts().then(result => {
      this.productList = result;
      this.isDataLoaded=true;
      this.reverseList = this.productList.reverseList.slice(this.productList.length-3)
    })
  }


}
