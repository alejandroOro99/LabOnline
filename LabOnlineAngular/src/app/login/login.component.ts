import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(){
    this.loginService.login(new User('Ale','yolo')).subscribe(res=>console.log(res));
  }
}
