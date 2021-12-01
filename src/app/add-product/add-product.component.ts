import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";
import {UsersService} from "../services/users.service";
import {AuthenticationService} from "../services/authentication.service";


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  genders=[
    { name:'Male'},
    { name:'Female'},
    { name:'Kids'},
  ];
  addProductForm = new FormGroup({
    productName: new FormControl(''),
    price: new FormControl(''),
    size: new FormControl(''),
    categoryGender: new FormControl(''),
    categoryType: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl('')

  });
  constructor(private productService:ProductService,private userService:UsersService,private authService:AuthenticationService) {
  }

  ngOnInit(): void {
  }

  email:any;
  onSubmit(){
    const {image, productName,categoryGender,categoryType, price, description, size}=this.addProductForm.value;
    console.log("product",this.addProductForm.value);
    this.email=this.authService.currentUserValue?.email;
    this.productService.addProduct(new Product(image, productName, [categoryGender,categoryType], price,
      description, this.email,size,new Date()));
    console.log(this.productService.getProducts())
  }

}
