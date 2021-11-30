import {FormControl} from "@angular/forms";

export class User{
  username:string="";
  password:string="";
  firstName:string="";
  lastName: string="";
  email: string="";
  city:string="";

  constructor(username: string, password: string, firstName: string, lastName: string, email: string, city: string) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.city = city;
  }
}
