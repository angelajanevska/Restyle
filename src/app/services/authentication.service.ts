import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {User} from "../models/user";
import {UsersService} from "./users.service";

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User | any>;
  public currentUser: Observable<User | undefined>;

  constructor(private userService: UsersService, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User | undefined>(JSON.parse(localStorage.getItem('currentUser') as any));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User | undefined {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    let loginSuccess = this.userService.login(username, password);
    if (loginSuccess == true) {
      let user = this.userService.getUser(username);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    }
    return loginSuccess;
  }

  register(username:string,password:string,repeatPassword:string,firstName:string,lastName:string,email:string,city:string){
    let registerSuccess = this.userService.register(username,password,repeatPassword,firstName,lastName,email,city);
    if (registerSuccess == true) {
      let user = this.userService.getUser(username);
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
    }
    return registerSuccess;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/']);
  }

}
