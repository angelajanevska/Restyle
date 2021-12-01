import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "../services/product.service";
import {Product} from "../models/product";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: any;
  code: any;

  constructor(private Activatedroute: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
  }

  sub: any;

  ngOnInit() {

    this.sub = this.Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.code = params.get('code');
      this.product = this.productService.getProductByCode(this.code);
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this.router.navigate(['product']);
  }
}
