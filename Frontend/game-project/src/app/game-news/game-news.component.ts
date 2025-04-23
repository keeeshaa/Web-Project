import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-news.component.html',
  styleUrls: ['./game-news.component.css']
})
export class GameNewsComponent implements OnInit {
  newsItems = [
    {
      title: 'Counter-Strike 2 Major Update Released',
      summary: 'Valve introduces new maps and gameplay mechanics in the latest update.',
      category: 'Update',
      date: '2024-03-15',
      imageUrl: 'https://example.com/cs2-update.jpg',
      url: '#'
    },
    {
      title: 'Baldur\'s Gate 3 Announces New DLC',
      summary: 'Larian Studios reveals upcoming content expansion with new areas and companions.',
      category: 'DLC',
      date: '2024-03-14',
      imageUrl: 'https://example.com/bg3-dlc.jpg',
      url: '#'
    }
    // Add more news items as needed
  ];

  ngOnInit() {
    // In a real app, you would fetch news from a service
  }
}