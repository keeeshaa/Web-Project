import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-game-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-news.component.html',
  styleUrls: ['./game-news.component.css']
})
export class GameNewsComponent implements OnInit {
  newsItems:any[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit() {
    this.loadNews();
  }
  loadNews(): void {
    this.apiService.getNews().subscribe({
      next: (news) => {
        this.newsItems = news;
      },
      error: (error) => {
        console.error('Error loading news:', error);
        // Fallback to local data if API fails
        this.newsItems = [
          {
            title: 'Counter-Strike 2 Major Update Released',
            summary: 'Valve introduces new maps and gameplay mechanics in the latest update.',
            category: 'Update',
            date: '2024-03-15',
            imageUrl: '/assets/news/cs2.jpg',
            url: '#'
          },

        ];
      }
    });
  }
  onImageError(event: any) {
    event.target.src = '/assets/news/default.jpg';
  }
}
