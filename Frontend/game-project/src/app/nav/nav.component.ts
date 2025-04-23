import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface Game {
  id: number;
  title: string;
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  @ViewChild('searchInput') searchInput!: ElementRef;
  
  searchTerm: string = '';
  showSearch: boolean = false;
  searchResults: Game[] = [];

  constructor(
    private router: Router,
    private elementRef: ElementRef
  ) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const searchContainer = this.elementRef.nativeElement.querySelector('.search-container');
    if (!searchContainer.contains(event.target)) {
      this.closeSearch();
    }
  }

  toggleSearch(event: MouseEvent) {
    event.stopPropagation();
    this.showSearch = !this.showSearch;
    if (this.showSearch) {
      setTimeout(() => {
        this.searchInput.nativeElement.focus();
      });
    }
  }

  closeSearch() {
    this.showSearch = false;
    this.searchTerm = '';
    this.searchResults = [];
  }

  onSearch() {
    if (this.searchTerm.trim() === '') {
      this.searchResults = [];
      return;
    }

    const searchTermLower = this.searchTerm.toLowerCase();
    this.searchResults = this.games
      .filter(game => 
        game.title.toLowerCase().includes(searchTermLower)
      )
      .slice(0, 6);
  }

  selectGame(game: Game) {
    // Navigate to games page with query params
    this.router.navigate(['/games'], { 
      queryParams: { 
        search: game.title,
        category: this.getGameCategory(game.id)
      }
    });
    this.closeSearch();
  }

  // You can also add a method to handle direct navigation when pressing enter
  onSearchKeyup(event: KeyboardEvent) {
    if (event.key === 'Enter' && this.searchResults.length > 0) {
      this.selectGame(this.searchResults[0]); // Navigate to first result
    }
  }

  getGameCategory(id: number): string {
    if (id >= 1 && id <= 10) return 'Action';
    if (id >= 11 && id <= 20) return 'Adventure';
    if (id >= 21 && id <= 30) return 'RPG';
    if (id >= 31 && id <= 40) return 'Strategy';
    if (id >= 41 && id <= 50) return 'Simulation';
    if (id >= 51 && id <= 60) return 'Sports & Racing';
    if (id >= 61 && id <= 70) return 'Indie';
    if (id >= 71 && id <= 80) return 'Free to Play';
    if (id >= 81 && id <= 90) return 'MMO';
    if (id >= 91 && id <= 100) return 'Casual';
    if (id >= 101 && id <= 110) return 'Horror';
    if (id >= 111 && id <= 120) return 'Puzzle';
    if (id >= 121 && id <= 130) return 'Fighting';
    if (id >= 131 && id <= 140) return 'Battle Royale';
    if (id >= 141 && id <= 150) return 'Visual Novel';
    return 'Unknown Category';
  }

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
}