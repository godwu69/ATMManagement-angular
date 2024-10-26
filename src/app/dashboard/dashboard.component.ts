import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {NgClass, NgForOf, NgIf, NgOptimizedImage, CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  balance: string = '';
  transactions: any[] = [];
  currentPage: number = 1;
  transactionsPerPage: number = 5;
  paginatedTransactions: any[] = [];
  totalPages: number = 0;
  greeting: string = '';
  isCollapsed: boolean = true;
  isLoading: boolean = false;
  selectedPage: string = 'home';
  isShowPassword: boolean = false;
  password: string = '';
  new_password: string = '';
  confirm_new_password: string = '';
  amount: string = '';
  account_number: string = '';
  isBtnLoading: boolean = false;
  otp: string = '';
  cooldown: number = 0;
  timerInterval: any;

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    const customerId = localStorage.getItem('customerId');
    const token = localStorage.getItem('token');

    if (!token) {
      console.log('Token not found! Redirecting to login...');
      this.router.navigate(['/']);
      return;
    }

    if (customerId) {
      this.isLoading = true;
      this.http.get<any>(`http://localhost:5098/api/atm/balance/${customerId}`)
        .subscribe({
          next: (response) => {
            this.balance = response.balance;
            localStorage.setItem('name', response.name);
            this.setGreeting();
          },
          error: (error) => {
            console.log('Error get balance: ' + error);
          }
        });

      this.http.get<any>(`http://localhost:5098/api/atm/transaction/${customerId}`)
        .subscribe({
          next: (response) => {
            this.transactions = response;
            this.totalPages = Math.ceil(this.transactions.length / this.transactionsPerPage);
            this.updatePaginatedTransactions();
            this.isLoading = false;
          },
          error: (error) => {
            console.log('Error get transactions: ' + error);
          }
        });
    } else {
      console.log('Customer not found!');
    }
  }

  setGreeting() {
    const customerName = localStorage.getItem('name');
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      this.greeting = 'Good morning, ' + customerName + '!';
    } else if (currentHour < 18) {
      this.greeting = 'Good afternoon, ' + customerName + '!';
    } else {
      this.greeting = 'Good evening, ' + customerName + '!';
    }
  }

  convertTimestamp(timestamp: number): string {
    const date = new Date(timestamp);
    return date.toLocaleString();
  }

  updatePaginatedTransactions() {
    const start = (this.currentPage - 1) * this.transactionsPerPage;
    const end = start + this.transactionsPerPage;
    this.paginatedTransactions = this.transactions.slice(start, end);
  }

  nextPage() {
    if (this.currentPage * this.transactionsPerPage < this.transactions.length) {
      this.currentPage++;
      this.updatePaginatedTransactions();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedTransactions();
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

  selectSideBar(page: string) {
    this.selectedPage = page;
    this.isShowPassword = false;
    this.password = '';
    this.new_password = '';
    this.confirm_new_password = '';
    this.amount = '';
    this.account_number = '';
    this.otp = '';
  }

  toggleShowPassword() {
    this.isShowPassword = !this.isShowPassword;
  }

  withdraw() {
    const customerId = localStorage.getItem('customerId');

    if (customerId) {
      this.isBtnLoading = true;
      this.http.post<any>('http://localhost:5098/api/atm/withdraw', {
        customerId: customerId,
        amount: this.amount,
        otp: this.otp
      }).subscribe({
        next: (response) => {
          this.isBtnLoading = false;
          alert(response.message);
          window.location.reload();
        },
        error: (error) => {
          alert(error.error.message);
          this.isBtnLoading = false;
        }
      });
    }
  }

  deposit() {
    const customerId = localStorage.getItem('customerId');

    if (customerId) {
      this.isBtnLoading = true;
      this.http.post<any>('http://localhost:5098/api/atm/deposit', {
        customerId: customerId,
        amount: this.amount,
        otp: this.otp
      }).subscribe({
        next: (response) => {
          this.isBtnLoading = false;
          alert(response.message);
          window.location.reload();
        },
        error: (error) => {
          console.log(error.error.message);
          this.isBtnLoading = false;
        }
      });
    }
  }

  change_password() {
    const email = localStorage.getItem('email');
    if (email) {
      this.isBtnLoading = true;
      this.http.put<any>('http://localhost:5098/api/auth/change-password', {
        email: email,
        oldPassword: this.password,
        newPassword: this.new_password
      }).subscribe({
        next: (response) => {
          this.isBtnLoading = false;
          alert('Password changed successfully. Please log in again');
          localStorage.clear();
          this.router.navigate(['/']);
        },
        error: (error) => {
          alert(error.error.message);
          this.isBtnLoading = false;
        }
      });
    }
  }

  transfer() {
    const customerId = localStorage.getItem('customerId');
    if (customerId) {
      this.isBtnLoading = true;
      this.http.post<any>('http://localhost:5098/api/atm/transfer', {
        sendId: customerId,
        receiveId: this.account_number,
        amount: this.amount,
        otp: this.otp
      }).subscribe({
        next: (response) => {
          this.isBtnLoading = false;
          alert(response.message);
          window.location.reload();
        },
        error: (error) => {
          alert(error.error.message);
          this.isBtnLoading = false;
        }
      });
    }
  }

  validateInput(event: any) {
    const value = event.target.value;
    const regex = /^\d*\.?\d*$/;

    if (!regex.test(value)) {
      event.target.value = value.slice(0, -1);
    }
  }

  sendOtp() {
    const customerId = localStorage.getItem('customerId');
    if (this.cooldown === 0) {
      if (customerId){
        this.http.post<any>('http://localhost:5098/api/atm/request-otp',{
          customerId: customerId
        }).subscribe({
          next: (response) => {
            alert(response.message);
          },
          error: (error) => {
            console.log(error.error.message);
          }
        });
      }
      this.cooldown = 30;
      this.timerInterval = setInterval(() => {
        this.cooldown--;
        if (this.cooldown === 0) {
          clearInterval(this.timerInterval);
        }
      }, 1000);
    }
  }
}
