import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  emailOrPhone: string = '';
  password: string = '';
  constructor(
    private router : Router,
    private authService: AuthService){

  }
  
  redirectToRegister() {
    this.router.navigate(['']); 
  }
  login() {
    debugger;
    this.authService.login(this.emailOrPhone, this.password).subscribe(
      (response) => {
        const token = response.token;
        console.log('Login successful. Token:', token);
        // Store the token in local storage or a service
        localStorage.setItem('jwt', token);
        
        // Show success alert
        alert('Login successful!');
      },
      (error) => {
        console.error('Login failed:', error);
        
        // Show error alert
        alert(`Login failed: ${error.error || 'An error occurred.'}`);
      }
    );
}

}