import { Injectable } from '@angular/core';
import {User} from "../models/user";
import {Product} from "../models/product";


@Injectable({ providedIn: 'root' })
export class ProductService {

  private products:Product[]=[
    new Product("","bluza",["male","female"],50,"desc","gm@gmail.com",new Date()),
    new Product("","maica",["male","female"],50,"desc","gm@gmail.com",new Date())
  ];

  getProductByCode(code:string){
    return this.products.find(x=>x.code==code);
  }

  getProductByName(name:string){
    return this.products.find(x=>x.name==name);
  }

  getProducts(){
    return this.products;
  }

  addProduct(product:Product){
    this.products.push(product);
  }


}
