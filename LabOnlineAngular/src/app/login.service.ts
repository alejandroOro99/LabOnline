import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl = 'http://localhost:3000/login';
  constructor(private http: HttpClient) { }

  public login(user: User): Observable<User>{
    return this.http.post<User>(this.loginUrl, user);
  }
}
