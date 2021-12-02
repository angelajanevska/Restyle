import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ShopComponent } from './shop/shop.component';
import {ProductCardComponent} from "./product-card/product-card.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { WishlistComponent } from './wishlist/wishlist.component';
import { WhyRestyleComponent } from './why-restyle/why-restyle.component';
import { ContactComponent } from './contact/contact.component';
import {NgxPaginationModule} from "ngx-pagination";

const routes: Routes = [
  // { path: '', component:HomeComponent },
  // { path: 'register', component:RegisterComponent },
  // { path: 'login', component:LoginComponent },
  // { path: 'account', component:AccountComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    AccountComponent,
    HeaderComponent,
    FooterComponent,
    ProductDetailsComponent,
    AddProductComponent,
    ShopComponent,
    ProductCardComponent,
    WishlistComponent,
    WhyRestyleComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent,ShopComponent],
})

export class AppModule { }



