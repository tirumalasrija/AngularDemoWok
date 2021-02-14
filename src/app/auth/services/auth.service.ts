import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

  getUser(form): Observable<any>{
    console.log(form.value);
    return this.http.post(`${environment.api}/register`,form.value);
  }

  getLogin(form): Observable<any>{
    console.log(form.value);
    return this.http.post(`${environment.api}/api/login`,form.value);
  }
}
