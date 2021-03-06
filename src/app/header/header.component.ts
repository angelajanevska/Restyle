import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn=false;

  constructor(private authService:AuthenticationService) {
    this.authService.currentUser.subscribe(user=>{
      if (user){
        this.isLoggedIn=true;
      }else {
        this.isLoggedIn=false;
      }
    });
  }
  ifLoggedIn(){
    this.authService.currentUser.subscribe(user=>{
      if (user){
        this.isLoggedIn=true;
      }else {
        this.isLoggedIn=false;
      }
    });
    if(this.isLoggedIn){
      return "/addProduct"
    }
    else{
      return "/login"
    }
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnInit(): void {
  }

}
