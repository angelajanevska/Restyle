import { Injectable } from '@angular/core';
import { Product } from "../models/product";
import { HttpClient } from "@angular/common/http";


@Injectable({ providedIn: 'root' })
export class ProductService {

  private products: Product[] = [];

  constructor(private http: HttpClient) {
    if (localStorage.getItem('products')) {
      this.products = JSON.parse(localStorage.getItem('products') as any);
    }
  }

  async getProducts() {
    if (this.products.length > 0) {
      return this.products;
    } else {
      try {
        let result = await this.http.get("assets/json/productData.json").toPromise() as any;
        this.products = result.product;
        this.saveToLocalStorage();
        return this.products;
      } catch {
        return this.products
      }
    }
  }

  getAllProductsWithEmail(email: string) {
    return this.products.filter(x => x.email == email);
  }

  getAllProductsWithSize(size: string) {
    return this.products.filter(x => x.size == size);
  }

  getAllProductsByFilter(size?: string, gender?: string, type?: string) {
   //   let result = this.getProducts().then(result =>{
   //     if (size != null) {
   //       result.filter(x => x.size == size);
   //     }
   //     if (gender != null) {
   //       result.filter(x => x.category.some(d => d == type));
   //       //result.filter(x => x.category[0]== gender);
   //     }
   //     if (type != null) {
   //       result.filter(x => x.category.some(d => d == type));
   //       //result.filter(x => x.category[1]== type);
   //     }
   //   });
   // console.log(result)
   //  //result.filter(x => x.size == size).filter(x=>x.category[0]==gender).filter(x => x.category[1]== type)
   //  // result = [... this.products].filter(x => x.size == size).filter(x=>x.category[0]==gender).filter(x => x.category[1]== type);
   //  // console.log(result)
   //  return result;
  }
  getProductByCode(code: string) {
    return this.products.find(x => x.code == code);
  }

  addProduct(product: Product) {
    this.products.unshift(product);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(this.products));
  }

  getFromLocalStorage(){
    return localStorage.getItem('products');
  }
}
