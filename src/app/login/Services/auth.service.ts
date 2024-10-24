import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/app/Environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl =  environment.apiUrl; 
  private tokenKey = 'jwt_token'; // Key for storing token

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { EmailOrPhone: string; Password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login/login`, credentials).pipe(
      tap(response => {
        this.storeToken(response.token);
      })
    );
  }

  storeToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']); // Redirect to login page after logout
  }

  isLoggedIn(): boolean {
    return !!this.getToken(); // Return true if the token exists
  }
}
