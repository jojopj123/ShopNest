import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  EmailOrPhone: string = '';
  Password: string = '';
  errorMessage: string | null = null;
  constructor(
    private router : Router,
    private authService: AuthService){

  }
  
  redirectToRegister() {
    this.router.navigate(['']); 
  }

onSubmit() {
  debugger;

  if (!this.EmailOrPhone || !this.Password) {
    this.errorMessage = 'Email/Phone and Password are required.';
    return;
  }

  this.authService.login({ EmailOrPhone: this.EmailOrPhone, Password: this.Password }).subscribe({
    next: () => {
      //alert('Login successful!');
       this.router.navigate(['/HomePage']); 
    },
    error: (err: any) => {
      console.error('Login failed', err);
      this.errorMessage = 'Login failed. Please check your credentials.';
      //alert(this.errorMessage); 
    }
  });
}


}