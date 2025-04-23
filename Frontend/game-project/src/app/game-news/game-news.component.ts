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
      imageUrl: '/assets/news/cs2.jpg',
      url: '#'
    },
    {
      title: 'Baldur\'s Gate 3 Announces New DLC',
      summary: 'Larian Studios reveals upcoming content expansion with new areas and companions.',
      category: 'DLC',
      date: '2024-03-14',
      imageUrl: '/assets/news/bg3.jpg',
      url: '#'
    },
    {
      title: 'The Elder Scrolls VI Development Update',
      summary: 'Bethesda shares new details about the highly anticipated next chapter in The Elder Scrolls series.',
      category: 'Development',
      date: '2024-03-13',
      imageUrl: '/assets/news/tes6.jpg',
      url: '#'
    },
    {
      title: 'GTA 6 Gameplay Features Revealed',
      summary: 'Rockstar Games unveils new gameplay mechanics and features for the upcoming Grand Theft Auto VI.',
      category: 'Announcement',
      date: '2024-03-12',
      imageUrl: '/assets/news/gta6.jpg',
      url: '#'
    },
    {
      title: 'Final Fantasy VII Rebirth Launch Success',
      summary: 'Square Enix celebrates record-breaking sales for the latest installment in the FF7 Remake project.',
      category: 'Release',
      date: '2024-03-11',
      imageUrl: '/assets/news/ff7r.jpg',
      url: '#'
    },
    {
      title: 'New PlayStation 5 Pro Specifications Leaked',
      summary: 'Details about Sony\'s upgraded PS5 Pro console emerge, promising significant performance improvements.',
      category: 'Hardware',
      date: '2024-03-10',
      imageUrl: '/assets/news/ps5pro.jpg',
      url: '#'
    }
  ];

  ngOnInit() {
    // In a real app, you would fetch news from a service
  }

  onImageError(event: any) {
    event.target.src = '/assets/news/default.jpg';
  }
}