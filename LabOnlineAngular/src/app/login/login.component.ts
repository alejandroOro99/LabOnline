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

  constructor(private loginService: LoginService) { }

  helloMessage = "hello";
  ngOnInit(): void {
  }

  login(){
    this.loginService.login(new User('Ale','yolo', 'Alejandro', 'Orozco')).subscribe(res=>console.log(res));
  }
}
