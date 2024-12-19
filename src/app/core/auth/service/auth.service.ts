import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  private readonly apiUrl: string = environment.apiUrl;

  signIn(login : string, password: string) : Observable<string> {
    return this.http.post(`${this.apiUrl}/auth/sign-in`, {
      login,
      password, 
    },{responseType: 'text'});
  }
}
