import { Injectable } from '@angular/core';
import {User} from "../models/user";


@Injectable({ providedIn: 'root' })
export class UsersService {

  private users:User[]=[
    new User("galena","galena123","Galena","Milenkoska", "gm@gmail.com","Prilep"),
    new User("angela","angela123","Angela","Stevkovska","as@gmail.com","Skopje")
  ];

  getUser(username:string){
    console.log(this.users)
    return this.users.find(x=>x.username==username);
  }

  getUserForRegister(username:string,email:string){
    console.log(this.users)
    return this.users.find(x=>x.username==username || x.email==email);
  }

  addUser(user:User){
    let foundUser=this.getUserForRegister(user.username,user.email);
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

  register(username:string,password:string,repeatPassword:string,firstName:string,lastName:string,email:string,city:string){
    if(repeatPassword==password){
      return this.addUser(new User(username,password,firstName,lastName,email,city));
    } else {
      console.log("incorrect password")
      return false;
    }
  }
}
