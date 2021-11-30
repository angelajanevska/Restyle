import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsersService} from "../services/users.service";
import {AuthenticationService} from "../services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  returnUrl:string='';
  constructor(private usersService:UsersService, private authService:AuthenticationService,
      private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
    onSubmit() {
      // TODO: Use EventEmitter with form value
      const {username,password}=this.loginForm.value;
      let success=this.authService.login(username,password);
      if (success){
        this.router.navigate([this.returnUrl]);
      }
      this.loginForm.reset();
    }
}

