import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('access_token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  // Authentication
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/token/`, { username, password });
  }

  refreshToken(): Observable<any> {
    const refresh = localStorage.getItem('refresh_token');
    return this.http.post(`${this.apiUrl}/token/refresh/`, { refresh });
  }

  // Games
  getGames(): Observable<any> {
    return this.http.get(`${this.apiUrl}/games/`, { headers: this.getHeaders() });
  }

  getGame(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/games/${id}/`, { headers: this.getHeaders() });
  }

  // Reviews
  getGameReviews(gameId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/games/${gameId}/reviews/`, { headers: this.getHeaders() });
  }

  createReview(gameId: number, rating: number, text: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/reviews/`,
      { game: gameId, rating, text },
      { headers: this.getHeaders() }
    );
  }

  // Discussions
  getGameDiscussions(gameId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/games/${gameId}/discussions/`, { headers: this.getHeaders() });
  }

  createDiscussion(gameId: number, title: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/discussions/`,
      { game: gameId, title },
      { headers: this.getHeaders() }
    );
  }

  // Messages
  getDiscussionMessages(discussionId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/discussions/${discussionId}/messages/`, { headers: this.getHeaders() });
  }

  sendMessage(discussionId: number, text: string): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/messages/`,
      { discussion: discussionId, text },
      { headers: this.getHeaders() }
    );
  }

  // News
  getNews(): Observable<any> {
    return this.http.get(`${this.apiUrl}/news/`, { headers: this.getHeaders() });
  }

  // User
  getCurrentUser(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/me/`, { headers: this.getHeaders() });
  }
}
