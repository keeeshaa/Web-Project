import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
interface Review {
  username: string;
  rating: number;
  text: string;
  date: string;
}

@Component({
  selector: 'app-game-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './game-reviews.component.html',
  styleUrls: ['./game-reviews.component.css']
})
export class GameReviewsComponent implements OnInit {
  game: any = null;
  reviews: any[] = [];
  showReviewForm = false;
  newReview = { rating: 0, text: '' };

  getFullStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  hasPartialStar(rating: number): boolean {
    return rating % 1 !== 0;
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - Math.ceil(rating)).fill(0);
  }

  getPartialStarWidth(rating: number): number {
    return (rating % 1) * 100;
  }


  gameReviews: { [key: number]: Review[] } = {
    1: [ // Counter-Strike 2
      {
        username: 'TacticalPro',
        rating: 5,
        text: 'Source 2 engine is a game-changer. The graphics and physics are incredible!',
        date: '2024-03-15'
      },
      {
        username: 'HeadshotMaster',
        rating: 4,
        text: 'Great improvements over CS:GO, but still some minor bugs to fix.',
        date: '2024-03-14'
      }
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  get averageRating(): number {
    if (!this.reviews.length) return 0;
    const total = this.reviews.reduce((sum, review) => sum + review.rating, 0);
    return Number((total / this.reviews.length).toFixed(1));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const gameId = Number(params.get('id'));
      // Get reviews for the specific game
      this.reviews = this.gameReviews[gameId] || [];
      // Set game details
      this.game = {
        id: gameId,
        title: this.getGameTitle(gameId), // You would need to implement this method
        reviews: this.reviews
      };
      this.loadGame(gameId);
      this.loadReviews(gameId);
    });
  }
  loadGame(gameId: number): void {
    this.apiService.getGame(gameId).subscribe({
      next: (game) => {
        this.game = game;
      },
      error: (error) => {
        console.error('Error loading game:', error);
      }
    });
  }

  loadReviews(gameId: number): void {
    this.apiService.getGameReviews(gameId).subscribe({
      next: (reviews) => {
        this.reviews = reviews;
      },
      error: (error) => {
        console.error('Error loading reviews:', error);
      }
    });
  }
  submitReview(): void {
    if (this.newReview.rating && this.newReview.text.trim()) {
      this.apiService.createReview(
        this.game.id,
        this.newReview.rating,
        this.newReview.text.trim()
      ).subscribe({
        next: (review) => {
          this.reviews.unshift(review);
          this.showReviewForm = false;
          this.newReview = { rating: 0, text: '' };
        },
        error: (error) => {
          console.error('Error submitting review:', error);
        }
      });
    }
  }

  // Helper method to get game title (you would need to implement this)
  private getGameTitle(gameId: number): string {
    const gameTitles: { [key: number]: string } = {
      // Action Games (1-10)
      1: 'Counter-Strike 2',
      2: 'Call of Duty: Modern Warfare III',
      3: 'Doom Eternal',
      4: 'Devil May Cry 5',
      5: 'Resident Evil 4 Remake',
      6: 'God of War Ragnarök',
      7: 'Sekiro: Shadows Die Twice',
      8: 'Monster Hunter World',
      9: 'Hades',
      10: 'Star Wars Jedi: Survivor',

      // Adventure Games (11-20)
      11: 'Red Dead Redemption 2',
      12: 'The Legend of Zelda: TOTK',
      13: 'Uncharted 4',
      14: 'A Plague Tale: Requiem',
      15: 'Sea of Thieves',
      16: 'Death Stranding',
      17: 'Horizon Forbidden West',
      18: 'It Takes Two',
      19: 'Assassin\'s Creed Valhalla',
      20: 'Ghost of Tsushima',

      // RPGs (21-25)
      21: 'Baldur\'s Gate 3',
      22: 'The Witcher 3: Wild Hunt',
      23: 'Elden Ring',
      24: 'Final Fantasy XVI',
      25: 'Persona 5 Royal',
      26: 'Dragon Age: Inquisition',
      27: 'Divinity: Original Sin 2',
      28: 'Mass Effect Legendary Edition',
      29: 'Starfield',
      30: 'Diablo IV',

      // Strategy Games (31-40)
      31: 'Dota 2',
      32: 'Civilization VI',
      33: 'Age of Empires IV',
      34: 'Total War: Warhammer III',
      35: 'XCOM 2',
      36: 'Stellaris',
      37: 'Crusader Kings III',
      38: 'Frostpunk',
      39: 'Company of Heroes 3',
      40: 'Into the Breach',

      // Simulation Games (41-50)
      41: 'Stardew Valley',
      42: 'Microsoft Flight Simulator',
      43: 'Cities: Skylines II',
      44: 'Euro Truck Simulator 2',
      45: 'The Sims 4',
      46: 'Planet Zoo',
      47: 'Farming Simulator 22',
      48: 'Two Point Hospital',
      49: 'House Flipper',
      50: 'PowerWash Simulator',

      // Sports & Racing Games (51-60)
      51: 'EA Sports FC 24',
      52: 'Forza Horizon 5',
      53: 'NBA 2K24',
      54: 'F1 23',
      55: 'Gran Turismo 7',
      56: 'WWE 2K23',
      57: 'Riders Republic',
      58: 'MLB The Show 23',
      59: 'Tony Hawk\'s Pro Skater 1+2',
      60: 'Need for Speed Unbound',

      // Indie Games (61-70)
      61: 'Hollow Knight',
      62: 'Celeste',
      63: 'Undertale',
      64: 'Disco Elysium',
      65: 'Outer Wilds',
      66: 'Slay the Spire',
      67: 'Valheim',
      68: 'Vampire Survivors',
      69: 'Cult of the Lamb',
      70: 'Satisfactory',

      // Free to Play Games (71-80)
      71: 'Fortnite',
      72: 'League of Legends',
      73: 'Warframe',
      74: 'Path of Exile',
      75: 'Genshin Impact',
      76: 'Destiny 2',
      77: 'Apex Legends',
      78: 'Lost Ark',
      79: 'Valorant',
      80: 'Rocket League',

      // MMO Games (81-90)
      81: 'Final Fantasy XIV',
      82: 'World of Warcraft',
      83: 'The Elder Scrolls Online',
      84: 'Black Desert Online',
      85: 'Guild Wars 2',
      86: 'Star Wars: The Old Republic',
      87: 'New World',
      88: 'RuneScape',
      89: 'Albion Online',
      90: 'EVE Online',

      // Casual Games (91-100)
      91: 'Among Us',
      92: 'Fall Guys',
      93: 'Overcooked! 2',
      94: 'Untitled Goose Game',
      95: 'Moving Out',
      96: 'Human: Fall Flat',
      97: 'Golf With Your Friends',
      98: 'Jackbox Party Pack 9',
      99: 'Goat Simulator 3',
      100: 'Unpacking',

      // Horror Games (101-110)
      101: 'Dead Space Remake',
      102: 'Resident Evil Village',
      103: 'Amnesia: The Bunker',
      104: 'Outlast 2',
      105: 'Layers of Fear',
      106: 'Phasmophobia',
      107: 'The Quarry',
      108: 'SOMA',
      109: 'Little Nightmares II',
      110: 'Alien: Isolation',

      // Puzzle Games (111-120)
      111: 'Portal 2',
      112: 'Baba Is You',
      113: 'The Witness',
      114: 'Tetris Effect: Connected',
      115: 'Return to Monkey Island',
      116: 'Superliminal',
      117: 'The Talos Principle',
      118: 'We Were Here Forever',
      119: 'Escape Simulator',
      120: 'A Little to the Left',

      // Fighting Games (121-130)
      121: 'Street Fighter 6',
      122: 'Mortal Kombat 1',
      123: 'Tekken 8',
      124: 'Guilty Gear Strive',
      125: 'MultiVersus',
      126: 'Dragon Ball FighterZ',
      127: 'The King of Fighters XV',
      128: 'Nickelodeon All-Star Brawl 2',
      129: 'Brawlhalla',
      130: 'Skullgirls 2nd Encore',

      // Battle Royale Games (131-140)
      131: 'PUBG: BATTLEGROUNDS',
      132: 'Fortnite',
      133: 'Call of Duty: Warzone',
      134: 'Apex Legends',
      135: 'Fall Guys',
      136: 'Naraka: Bladepoint',
      137: 'Vampire: The Masquerade - Blood Hunt',
      138: 'Super People',
      139: 'Rumbleverse',
      140: 'Spellbreak',

      // Visual Novel Games (141-150)
      141: 'Steins;Gate',
      142: 'Danganronpa V3',
      143: 'VA-11 Hall-A',
      144: 'Phoenix Wright: Ace Attorney Trilogy',
      145: 'Doki Doki Literature Club Plus!',
      146: 'The House in Fata Morgana',
      147: '13 Sentinels: Aegis Rim',
      148: 'AI: The Somnium Files',
      149: 'Clannad',
      150: 'Zero Escape: The Nonary Games'
    };
    return gameTitles[gameId] || 'Unknown Game';
  }
}
