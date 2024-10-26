import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {NgIf, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  name: string = '';
  isLoading: boolean = false;
  isRegister: boolean = false;
  message: string = '';
  isShowPassword: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
  }

  login() {
    this.isLoading = true;
    if (!this.email || !this.password) {
      this.message = 'Please fill in all fields';
      setTimeout(() => {
        this.message = '';
      }, 2000);
      this.isLoading = false;
      return;
    }

    this.http.post<any>('http://localhost:5098/api/auth/login', {
      email: this.email,
      password: this.password
    }).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('customerId', response.customerId);
        localStorage.setItem('email', response.email);
        console.log('Login successful!');
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.isLoading = false;
        this.message = error.error.message ? error.error.message : 'An error occurred. Please try again.';
        setTimeout(() => {
          this.message = '';
        }, 2000);
        console.log(error.error.message);
      }
    });
  }

  register() {
    this.isLoading = true;
    if (!this.email || !this.password || !this.name) {
      this.message = 'Please fill in all fields';
      setTimeout(() => {
        this.message = '';
      }, 2000);
      this.isLoading = false;
      return;
    }

    this.http.post<any>('http://localhost:5098/api/auth/register', {
      email: this.email,
      password: this.password,
      name: this.name,
    }).subscribe({
      next: (response) => {
        alert('Register successful!');
        setTimeout(() => {
          this.message = '';
        }, 2000);
        this.isLoading = false;
      },
      error: (error) => {
        this.message = error.error.message ? error.error.message : 'An error occurred. Please try again.';
        setTimeout(() => {
          this.message = '';
        }, 2000);
        alert('Register failed: ' + error.message);
        this.isLoading = false;
      }
    });
  }

  toggleRegister() {
    this.isRegister = !this.isRegister;
    this.email = '';
    this.password = '';
    this.name = '';
  }

  toggleShowPassword() {
    this.isShowPassword = !this.isShowPassword;
  }
}
