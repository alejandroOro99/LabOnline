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
    
    console.log(this.romanToInt('CDXCIX'));
  }
/**
 * @param {string} s
 * @return {number}
 */
romanToInt(s: string){
  let number = '';
  console.log(s.length);
  for(let i = 0;i<s.length;i++){
      if(s[i] === 'M'){
          number += '1000';
      }else if(s[i] === 'C'){
          number += '100';
      }else if(s[i] === 'L'){
          number += '50';    
      }else if(s[i] === 'D'){
          number += '500';   
      }else if(s[i] === 'X'){
          number += '10';     
      }else if(s[i] === 'V'){
          number += '5';     
      }else{
          number += '1';
      }
      number += ' ';
  }
 
  let numArr: any = number.split(' ');
  console.log(numArr);
  let result: number = 0;
  for(let i = 0;i<numArr.length;i++){
    if( (Number(numArr[i+1]) > Number(numArr[i]))){
      result += (Number(numArr[i+1]) - Number(numArr[i]));
      console.log(Number(numArr[i+1]) - Number(numArr[i]) + `${i}`);
      i++;
    }else{
      result += Number(numArr[i]);
    }
  }

  return result;
};
  login(){
    this.loginService.login(
      new User(this.username, this.password, this.name, this.lastName))
      .subscribe(res=>console.log(res));
  }
}
