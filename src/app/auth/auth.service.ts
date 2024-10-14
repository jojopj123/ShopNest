import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl =  'https://localhost:44371/api/Auth/login'; // Change this to your actual URL

  constructor(private http: HttpClient) {}

  login(emailOrPhone: string, password: string): Observable<LoginResponse> {
    const body = { EmailOrPhone: emailOrPhone, Password: password };
    return this.http.post<LoginResponse>(this.apiUrl, body);
  }
}
