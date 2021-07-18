import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../User';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username = '';
  public password = '';
  public name = '';
  public lastName = '';

  constructor(private loginService: LoginService) { }

  helloMessage = "hello";
  ngOnInit(): void {
  }

  login(){
    this.loginService.login(
      new User(this.username, this.password, this.name, this.lastName))
      .subscribe(res=>console.log(res));
  }
}
