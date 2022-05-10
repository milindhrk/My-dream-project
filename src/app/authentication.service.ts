import { Injectable } from '@angular/core';
import  {HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService 
{

  private baseUrl = 'http://localhost:8080/ims/api/dealers';

  constructor(private http:HttpClient) { }

  getDealersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  
}
