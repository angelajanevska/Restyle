import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UsersService} from "../services/users.service";
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public currentUserSubject: BehaviorSubject<User | any>;

  constructor(public userService: UsersService) {
    this.currentUserSubject = new BehaviorSubject<User | undefined>(JSON.parse(localStorage.getItem('currentUser') as any));
  }

  ngOnInit(): void {
  }

}
