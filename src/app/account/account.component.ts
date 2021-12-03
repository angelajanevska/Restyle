import { Component, OnInit } from '@angular/core';
import { UsersService } from "../services/users.service";
import { ProductService } from "../services/product.service";
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  productList: any;
  list: any
  currentUser: any;
  isDataLoaded = false;
  constructor(public userService: UsersService, private productService: ProductService, private authService: AuthenticationService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') as any);
    this.isDataLoaded = true;
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.productList = this.productService.getAllProductsWithEmail(this.currentUser.email);
  }
}
