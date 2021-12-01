import {Injectable} from '@angular/core';
import {User} from "../models/user";
import {Product} from "../models/product";
import {HttpClient} from "@angular/common/http";


@Injectable({providedIn: 'root'})
export class ProductService {

  private products: Product[] = [];


  constructor(private http: HttpClient) {

  }
  async getProducts() {
    if (this.products.length > 0) {
      return this.products;
    } else {
      try {
        let result = await this.http.get("assets/json/productData.json").toPromise() as any;
        this.products = result.product;
        return this.products;
      } catch {
        return this.products
      }
    }
  }

  async getAllProductsWithEmail(email: string) {
    if (this.products.length > 0) {
      return this.products;
    } else {
      try {
        let result = await this.http.get("assets/json/productData.json").toPromise() as any;
        this.products = result.product;
        return this.products.filter(x => x.email == email);
      } catch {
        return this.products.filter(x => x.email == email);
      }
    }
  }

  getProductByCode(code: string) {
    return this.products.find(x => x.code == code);
  }

  getProductByName(name: string) {
    return this.products.find(x => x.name == name);
  }



  addProduct(product: Product) {
    this.products.push(product);
  }


}
