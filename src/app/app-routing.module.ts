import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {AccountComponent} from "./account/account.component";
import {AuthGuard} from "./guards/auth.guards";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {AddProductComponent} from "./add-product/add-product.component";
import {ProductCardComponent} from "./product-card/product-card.component";
import {ShopComponent} from "./shop/shop.component";

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'login', component:LoginComponent},
  { path: 'account', component:AccountComponent,canActivate:[AuthGuard]},
  { path: 'addProduct', component:AddProductComponent },
  { path: 'shop', component:ShopComponent},
  { path: 'shop/:code', component: ProductDetailsComponent},
  { path: 'account/:code', component: ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
