import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Game {
  id: number;
  title: string;
}

@Component({
  selector: 'app-game-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="search-container">
      <div class="search-box">
        <input type="text" 
               [(ngModel)]="searchTerm" 
               (input)="onSearch()"
               placeholder="Search games..."
               class="search-input"
               [class.active]="searchTerm.length > 0">
        <i class="search-icon">🔍</i>
        <button *ngIf="searchTerm.length > 0" 
                class="clear-button"
                (click)="clearSearch()">✕</button>
      </div>
      <div class="search-results" 
           *ngIf="searchResults.length > 0"
           [@slideInOut]>
        <div *ngFor="let game of searchResults" 
             class="search-result-item"
             (click)="selectGame(game)">
          <span class="game-title">{{ game.title }}</span>
          <span class="game-category">{{ getGameCategory(game.id) }}</span>
        </div>
        <div *ngIf="searchResults.length === 0 && searchTerm.length > 0" 
             class="no-results">
          No games found
        </div>
      </div>
    </div>
  `,
  styles: [`
    .search-container {
      position: relative;
      width: 100%;
      max-width: 600px;
      margin: 2rem auto;
      padding: 0 1rem;
    }

    .search-box {
      position: relative;
      width: 100%;
    }

    .search-input {
      width: 100%;
      padding: 1rem 3rem;
      border: 2px solid #e0e0e0;
      border-radius: 50px;
      font-size: 1rem;
      transition: all 0.3s ease;
      background: #f8f9fa;
      color: #333;
    }

    .search-input:focus {
      outline: none;
      border-color: #007bff;
      box-shadow: 0 0 0 3px rgba(0,123,255,0.25);
      background: #fff;
    }

    .search-input.active {
      background: #fff;
    }

    .search-icon {
      position: absolute;
      left: 1rem;
      top: 50%;
      transform: translateY(-50%);
      color: #666;
      font-style: normal;
    }

    .clear-button {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: #666;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 0.2s;
    }

    .clear-button:hover {
      background-color: #f0f0f0;
    }

    .search-results {
      position: absolute;
      top: calc(100% + 0.5rem);
      left: 0;
      right: 0;
      background: white;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
      max-height: 400px;
      overflow-y: auto;
      z-index: 1000;
      margin: 0 1rem;
    }

    .search-result-item {
      padding: 0.75rem 1rem;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #f0f0f0;
      transition: background-color 0.2s;
    }

    .search-result-item:last-child {
      border-bottom: none;
    }

    .search-result-item:hover {
      background-color: #f8f9fa;
    }

    .game-title {
      font-weight: 500;
      color: #333;
    }

    .game-category {
      font-size: 0.85rem;
      color: #666;
      background: #f0f0f0;
      padding: 0.25rem 0.5rem;
      border-radius: 12px;
    }

    .no-results {
      padding: 1rem;
      text-align: center;
      color: #666;
    }

    /* Scrollbar styling */
    .search-results::-webkit-scrollbar {
      width: 8px;
    }

    .search-results::-webkit-scrollbar-track {
      background: #f1f1f1;
      border-radius: 8px;
    }

    .search-results::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 8px;
    }

    .search-results::-webkit-scrollbar-thumb:hover {
      background: #999;
    }
  `]
})
export class GameSearchComponent {
  searchTerm: string = '';
  searchResults: Game[] = [];

  // This is your game database - you should replace these with your actual games
  private games: Game[] = [
    // Action Games (1-10)
    { id: 1, title: 'Counter-Strike 2' },
    { id: 2, title: 'Call of Duty: Modern Warfare III' },
    { id: 3, title: 'Doom Eternal' },
    { id: 4, title: 'Devil May Cry 5' },
    { id: 5, title: 'Resident Evil 4 Remake' },
    { id: 6, title: 'God of War Ragnarök' },
    { id: 7, title: 'Sekiro: Shadows Die Twice' },
    { id: 8, title: 'Monster Hunter World' },
    { id: 9, title: 'Hades' },
    { id: 10, title: 'Star Wars Jedi: Survivor' },

    // Adventure Games (11-20)
    { id: 11, title: 'Red Dead Redemption 2' },
    { id: 12, title: 'The Legend of Zelda: TOTK' },
    { id: 13, title: 'Uncharted 4' },
    { id: 14, title: 'A Plague Tale: Requiem' },
    { id: 15, title: 'Sea of Thieves' },
    { id: 16, title: 'Death Stranding' },
    { id: 17, title: 'Horizon Forbidden West' },
    { id: 18, title: 'It Takes Two' },
    { id: 19, title: 'Assassin\'s Creed Valhalla' },
    { id: 20, title: 'Ghost of Tsushima' },

    // RPGs (21-30)
    { id: 21, title: 'Baldur\'s Gate 3' },
    { id: 22, title: 'The Witcher 3: Wild Hunt' },
    { id: 23, title: 'Elden Ring' },
    { id: 24, title: 'Final Fantasy XVI' },
    { id: 25, title: 'Persona 5 Royal' },
    { id: 26, title: 'Dragon Age: Inquisition' },
    { id: 27, title: 'Divinity: Original Sin 2' },
    { id: 28, title: 'Mass Effect Legendary Edition' },
    { id: 29, title: 'Starfield' },
    { id: 30, title: 'Diablo IV' },

    // Strategy Games (31-40)
    { id: 31, title: 'Dota 2' },
    { id: 32, title: 'Civilization VI' },
    { id: 33, title: 'Age of Empires IV' },
    { id: 34, title: 'Total War: Warhammer III' },
    { id: 35, title: 'XCOM 2' },
    { id: 36, title: 'Stellaris' },
    { id: 37, title: 'Crusader Kings III' },
    { id: 38, title: 'Frostpunk' },
    { id: 39, title: 'Company of Heroes 3' },
    { id: 40, title: 'Into the Breach' },

    // Simulation Games (41-50)
    { id: 41, title: 'Stardew Valley' },
    { id: 42, title: 'Microsoft Flight Simulator' },
    { id: 43, title: 'Cities: Skylines II' },
    { id: 44, title: 'Euro Truck Simulator 2' },
    { id: 45, title: 'The Sims 4' },
    { id: 46, title: 'Planet Zoo' },
    { id: 47, title: 'Farming Simulator 22' },
    { id: 48, title: 'Two Point Hospital' },
    { id: 49, title: 'House Flipper' },
    { id: 50, title: 'PowerWash Simulator' },

    // Sports & Racing Games (51-60)
    { id: 51, title: 'EA Sports FC 24' },
    { id: 52, title: 'Forza Horizon 5' },
    { id: 53, title: 'NBA 2K24' },
    { id: 54, title: 'F1 23' },
    { id: 55, title: 'Gran Turismo 7' },
    { id: 56, title: 'WWE 2K23' },
    { id: 57, title: 'Riders Republic' },
    { id: 58, title: 'MLB The Show 23' },
    { id: 59, title: 'Tony Hawk\'s Pro Skater 1+2' },
    { id: 60, title: 'Need for Speed Unbound' },

    // Indie Games (61-70)
    { id: 61, title: 'Hollow Knight' },
    { id: 62, title: 'Celeste' },
    { id: 63, title: 'Undertale' },
    { id: 64, title: 'Disco Elysium' },
    { id: 65, title: 'Outer Wilds' },
    { id: 66, title: 'Slay the Spire' },
    { id: 67, title: 'Valheim' },
    { id: 68, title: 'Vampire Survivors' },
    { id: 69, title: 'Cult of the Lamb' },
    { id: 70, title: 'Satisfactory' },

    // Free to Play Games (71-80)
    { id: 71, title: 'Fortnite' },
    { id: 72, title: 'League of Legends' },
    { id: 73, title: 'Warframe' },
    { id: 74, title: 'Path of Exile' },
    { id: 75, title: 'Genshin Impact' },
    { id: 76, title: 'Destiny 2' },
    { id: 77, title: 'Apex Legends' },
    { id: 78, title: 'Lost Ark' },
    { id: 79, title: 'Valorant' },
    { id: 80, title: 'Rocket League' },

    // MMO Games (81-90)
    { id: 81, title: 'Final Fantasy XIV' },
    { id: 82, title: 'World of Warcraft' },
    { id: 83, title: 'The Elder Scrolls Online' },
    { id: 84, title: 'Black Desert Online' },
    { id: 85, title: 'Guild Wars 2' },
    { id: 86, title: 'Star Wars: The Old Republic' },
    { id: 87, title: 'New World' },
    { id: 88, title: 'RuneScape' },
    { id: 89, title: 'Albion Online' },
    { id: 90, title: 'EVE Online' },

    // Casual Games (91-100)
    { id: 91, title: 'Among Us' },
    { id: 92, title: 'Fall Guys' },
    { id: 93, title: 'Overcooked! 2' },
    { id: 94, title: 'Untitled Goose Game' },
    { id: 95, title: 'Moving Out' },
    { id: 96, title: 'Human: Fall Flat' },
    { id: 97, title: 'Golf With Your Friends' },
    { id: 98, title: 'Jackbox Party Pack 9' },
    { id: 99, title: 'Goat Simulator 3' },
    { id: 100, title: 'Unpacking' },

    // Horror Games (101-110)
    { id: 101, title: 'Dead Space Remake' },
    { id: 102, title: 'Resident Evil Village' },
    { id: 103, title: 'Amnesia: The Bunker' },
    { id: 104, title: 'Outlast 2' },
    { id: 105, title: 'Layers of Fear' },
    { id: 106, title: 'Phasmophobia' },
    { id: 107, title: 'The Quarry' },
    { id: 108, title: 'SOMA' },
    { id: 109, title: 'Little Nightmares II' },
    { id: 110, title: 'Alien: Isolation' },

    // Puzzle Games (111-120)
    { id: 111, title: 'Portal 2' },
    { id: 112, title: 'Baba Is You' },
    { id: 113, title: 'The Witness' },
    { id: 114, title: 'Tetris Effect: Connected' },
    { id: 115, title: 'Return to Monkey Island' },
    { id: 116, title: 'Superliminal' },
    { id: 117, title: 'The Talos Principle' },
    { id: 118, title: 'We Were Here Forever' },
    { id: 119, title: 'Escape Simulator' },
    { id: 120, title: 'A Little to the Left' },

    // Fighting Games (121-130)
    { id: 121, title: 'Street Fighter 6' },
    { id: 122, title: 'Mortal Kombat 1' },
    { id: 123, title: 'Tekken 8' },
    { id: 124, title: 'Guilty Gear Strive' },
    { id: 125, title: 'MultiVersus' },
    { id: 126, title: 'Dragon Ball FighterZ' },
    { id: 127, title: 'The King of Fighters XV' },
    { id: 128, title: 'Nickelodeon All-Star Brawl 2' },
    { id: 129, title: 'Brawlhalla' },
    { id: 130, title: 'Skullgirls 2nd Encore' },

    // Battle Royale Games (131-140)
    { id: 131, title: 'PUBG: BATTLEGROUNDS' },
    { id: 132, title: 'Fortnite' },
    { id: 133, title: 'Call of Duty: Warzone' },
    { id: 134, title: 'Apex Legends' },
    { id: 135, title: 'Fall Guys' },
    { id: 136, title: 'Naraka: Bladepoint' },
    { id: 137, title: 'Vampire: The Masquerade - Blood Hunt' },
    { id: 138, title: 'Super People' },
    { id: 139, title: 'Rumbleverse' },
    { id: 140, title: 'Spellbreak' },

    // Visual Novel Games (141-150)
    { id: 141, title: 'Steins;Gate' },
    { id: 142, title: 'Danganronpa V3' },
    { id: 143, title: 'VA-11 Hall-A' },
    { id: 144, title: 'Phoenix Wright: Ace Attorney Trilogy' },
    { id: 145, title: 'Doki Doki Literature Club Plus!' },
    { id: 146, title: 'The House in Fata Morgana' },
    { id: 147, title: '13 Sentinels: Aegis Rim' },
    { id: 148, title: 'AI: The Somnium Files' },
    { id: 149, title: 'Clannad' },
    { id: 150, title: 'Zero Escape: The Nonary Games' }
];
constructor(private router: Router) {}

onSearch() {
  if (this.searchTerm.trim() === '') {
    this.searchResults = [];
    return;
  }

  const searchTermLower = this.searchTerm.toLowerCase();
  this.searchResults = this.games
    .filter(game => 
      game.title.toLowerCase().includes(searchTermLower) ||
      this.getGameCategory(game.id).toLowerCase().includes(searchTermLower)
    )
    .slice(0, 10); // Limit to 10 results for better performance
}

selectGame(game: Game) {
  this.router.navigate(['/game-reviews', game.id]);
  this.clearSearch();
}

clearSearch() {
  this.searchTerm = '';
  this.searchResults = [];
}

getGameCategory(id: number): string {
  if (id >= 1 && id <= 10) return 'Action';
  else if (id >= 11 && id <= 20) return 'Adventure';
  else if (id >= 21 && id <= 30) return 'RPG';
  else if (id >= 31 && id <= 40) return 'Strategy';
  else if (id >= 41 && id <= 50) return 'Simulation';
  else if (id >= 51 && id <= 60) return 'Sports & Racing';
  else if (id >= 61 && id <= 70) return 'Indie';
  else if (id >= 71 && id <= 80) return 'Free to Play';
  else if (id >= 81 && id <= 90) return 'MMO';
  else if (id >= 91 && id <= 100) return 'Casual';
  else if (id >= 101 && id <= 110) return 'Horror';
  else if (id >= 111 && id <= 120) return 'Puzzle';
  else if (id >= 121 && id <= 130) return 'Fighting';
  else if (id >= 131 && id <= 140) return 'Battle Royale';
  else if (id >= 141 && id <= 150) return 'Visual Novel';
  return 'Unknown Category';
}
}