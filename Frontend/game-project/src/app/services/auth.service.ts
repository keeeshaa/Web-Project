import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  constructor(private apiService: ApiService, private router: Router) {
    this.checkAuthStatus();
  }

  private checkAuthStatus(): void {
    const token = localStorage.getItem('access_token');
    this.isAuthenticatedSubject.next(!!token);
  }

  login(username: string, password: string): void {
    this.apiService.login(username, password).subscribe({
      next: (response) => {
        localStorage.setItem('access_token', response.access);
        localStorage.setItem('refresh_token', response.refresh);
        this.isAuthenticatedSubject.next(true);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
  }

  logout(): void {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  refreshToken(): void {
    const refresh = localStorage.getItem('refresh_token');
    if (refresh) {
      this.apiService.refreshToken().subscribe({
        next: (response) => {
          localStorage.setItem('access_token', response.access);
        },
        error: (error) => {
          console.error('Token refresh failed:', error);
          this.logout();
        }
      });
    }
  }

  getCurrentUser(): void {
    return this.apiService.getCurrentUser();
  }
}
