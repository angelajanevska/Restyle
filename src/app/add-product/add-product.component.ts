import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  addProductForm = new FormGroup({
    productName: new FormControl(''),
    price: new FormControl(''),
    size: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl('')

  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
