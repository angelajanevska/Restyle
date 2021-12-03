import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { ProductService } from "../services/product.service";
import { Product } from "../models/product";
import { UsersService } from "../services/users.service";
import { AuthenticationService } from "../services/authentication.service";
import { ActivatedRoute, Router } from "@angular/router";


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  genders = [
    { name: 'Male' },
    { name: 'Female' },
    { name: 'Kids' },
  ];

  categories = [
    { name: 'T-shirts' },
    { name: 'Shirts'},
    { name: 'Sweaters' },
    { name: 'Skirts' },
    { name: 'Accessories' },
    { name: 'Pants' },
    { name: 'Dresses' },
    { name: 'Coats' },
    { name: 'Scarfs' },
    { name: 'Bags' }
  ]
  addProductForm = new FormGroup({
    productName: new FormControl(''),
    price: new FormControl(''),
    size: new FormControl(''),
    categoryGender: new FormControl(''),
    categoryType: new FormControl(''),
    description: new FormControl(''),
    image: new FormControl('')

  });
  selectedFile: any;
  constructor(private productService: ProductService, private userService: UsersService,
              private authService: AuthenticationService, private router: Router) {
    document.title="Add product"
  }

  ngOnInit(): void {
  }

  email: any;
  onSubmit() {
    const { image, productName, categoryGender, categoryType, price, description, size } = this.addProductForm.value;
    console.log("product", this.addProductForm.value);
    this.email = this.authService.currentUserValue?.email;
    this.productService.addProduct(new Product(image, productName, [categoryGender.name, categoryType.name], price,
      description, this.email, size, new Date()));
    console.log(this.productService.getProducts())
    this.addProductForm.reset();
    this.router.navigate(['/shop']);
  }

  processImage(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.addProductForm.controls['image'].setValue(this.selectedFile.src);
    });

    reader.readAsDataURL(file);
  }

}

class ImageSnippet {
  constructor(public src: string, public file: File) { }
}
