import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsersService} from "../services/users.service";
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public currentUserSubject: BehaviorSubject<User | any>;
  productList:any;
list:any
  constructor(public userService: UsersService, private productService:ProductService) {
    this.currentUserSubject = new BehaviorSubject<User | undefined>(JSON.parse(localStorage.getItem('currentUser') as any));
  }

  ngOnInit(): void {
    this.productService.getAllProductsWithEmail("gm@gmail.com").then(result => {
      this.productList = result;
    })
  }

}
