import { Component } from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularshop';
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

  onLogout(){
    this.authService.logout();
  }
}
