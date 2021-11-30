import { Injectable } from '@angular/core';
import {User} from "../models/user";


@Injectable({ providedIn: 'root' })
export class UsersService {

  private users:User[]=[
    new User("galena","galena123","Galena","Milenkoska", "gm@gmail.com","Skopje"),
    new User("angela","angela123","Angela","Stevkovska","as@gmail.com","Skopje")
  ];

  getUser(username:string){
    console.log(this.users)
    return this.users.find(x=>x.username==username);
  }

  addUser(user:User){
    let foundUser=this.getUser(user.email);
    if (foundUser==undefined){
      this.users.push(user);
      return true;
    }
      return false;
  }

  login(username:string,password:string){
    let foundUser=this.getUser(username);
    if (foundUser==undefined){
      return false;
    }
    if (foundUser.password==password){
      return true;
    }
    return false;
  }

}
