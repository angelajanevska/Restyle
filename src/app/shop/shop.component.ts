import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private productService:ProductService) { }

  productList=this.productService.getProducts();
  ngOnInit(): void {
  }

}
