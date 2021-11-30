import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsersService} from "../services/users.service";
import {AuthenticationService} from "../services/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    repeatPassword: new FormControl(''),
    city:new FormControl(''),
    username: new FormControl(''),

  });
  constructor(private usersService:UsersService, private authService:AuthenticationService,
              private route: ActivatedRoute,private router: Router){

  }
  returnUrl:string='';
  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    const {username,password,repeatPassword,firstName,lastName,email,city}=this.registerForm.value;
    let success=this.authService.register(username,password,repeatPassword,firstName,lastName,email,city);
    if (success){
      this.router.navigate([this.returnUrl]);
    }
    this.registerForm.reset();
  }
}
