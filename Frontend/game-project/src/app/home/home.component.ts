import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories = [
    'All',
    'Action',
    'Adventure',
    'RPG',
    'Strategy',
    'Simulation',
    'Sports & Racing',
    'Indie',
    'Free to Play',
    'MMO',
    'Casual',
    'Horror',
    'Puzzle',
    'Fighting',
    'Battle Royale',
    'Visual Novel'
  ];
  selectedCategory: string = 'All';

  // Update the games array to include rating information:
  games = [
    // Action Games (10)
    { 
      id: 1, 
      title: 'Counter-Strike 2', 
      description: 'The next evolution of the classic team-based shooter. Join the tactical combat discussions.',
      category: 'Action',
      activePlayers: 156,
      rating: 4.5,
      reviewCount: 1250
    },
    {
      id: 2,
      title: 'Call of Duty: Modern Warfare III',
      description: 'Experience the latest chapter in the Modern Warfare saga with intense multiplayer combat.',
      category: 'Action',
      activePlayers: 143,
      rating: 4.2,
      reviewCount: 980
    },
    {
      id: 3,
      title: 'Doom Eternal',
      description: 'Rip and tear through demons in this fast-paced FPS.',
      category: 'Action',
      activePlayers: 89,
      rating: 4.7,
      reviewCount: 845
    },
    {
      id: 4,
      title: 'Devil May Cry 5',
      description: 'Stylish action combat with deep combo systems.',
      category: 'Action',
      activePlayers: 67,
      rating: 4.6,
      reviewCount: 723
    },
    {
      id: 5,
      title: 'Resident Evil 4 Remake',
      description: 'The classic survival horror reimagined for modern systems.',
      category: 'Action',
      activePlayers: 98,
      rating: 4.8,
      reviewCount: 912
    },
    {
      id: 6,
      title: 'God of War Ragnarök',
      description: 'Continue Kratos and Atreus\'s epic journey through Norse mythology.',
      category: 'Action',
      activePlayers: 112,
      rating: 4.9,
      reviewCount: 1100
    },
    {
      id: 7,
      title: 'Sekiro: Shadows Die Twice',
      description: 'Master the art of shinobi combat in feudal Japan.',
      category: 'Action',
      activePlayers: 78,
      rating: 4.7,
      reviewCount: 890
    },
    {
      id: 8,
      title: 'Monster Hunter World',
      description: 'Hunt massive creatures and forge powerful gear.',
      category: 'Action',
      activePlayers: 134,
      rating: 4.5,
      reviewCount: 956
    },
    {
      id: 9,
      title: 'Hades',
      description: 'Fight your way out of the underworld in this roguelike action game.',
      category: 'Action',
      activePlayers: 92,
      rating: 4.8,
      reviewCount: 867
    },
    {
      id: 10,
      title: 'Star Wars Jedi: Survivor',
      description: 'Continue Cal Kestis\'s journey in this action-adventure.',
      category: 'Action',
      activePlayers: 145,
      rating: 4.4,
      reviewCount: 789
    },
  
    // Adventure Games (10)
    {
      id: 11,
      title: 'Red Dead Redemption 2',
      description: 'Experience the epic tale of Arthur Morgan in the dying West.',
      category: 'Adventure',
      activePlayers: 167,
      rating: 4.9,
      reviewCount: 1320
    },
    {
      id: 12,
      title: 'The Legend of Zelda: TOTK',
      description: 'Explore the vast lands and skies of Hyrule.',
      category: 'Adventure',
      activePlayers: 189,
      rating: 4.9,
      reviewCount: 1150
    },
    {
      id: 13,
      title: 'Uncharted 4',
      description: 'Join Nathan Drake\'s final adventure for fortune and glory.',
      category: 'Adventure',
      activePlayers: 78,
      rating: 4.7,
      reviewCount: 945
    },
    {
      id: 14,
      title: 'A Plague Tale: Requiem',
      description: 'Guide Amicia and Hugo through a brutal world.',
      category: 'Adventure',
      activePlayers: 56,
      rating: 4.5,
      reviewCount: 678
    },
    {
      id: 15,
      title: 'Sea of Thieves',
      description: 'Set sail for adventure in this pirate sandbox.',
      category: 'Adventure',
      activePlayers: 145,
      rating: 4.3,
      reviewCount: 890
    },
    {
      id: 16,
      title: 'Death Stranding',
      description: 'Reconnect a fractured society in this unique adventure.',
      category: 'Adventure',
      activePlayers: 89,
      rating: 4.4,
      reviewCount: 756
    },
    {
      id: 17,
      title: 'Horizon Forbidden West',
      description: 'Explore a post-apocalyptic world with mechanical beasts.',
      category: 'Adventure',
      activePlayers: 123,
      rating: 4.6,
      reviewCount: 867
    },
    {
      id: 18,
      title: 'It Takes Two',
      description: 'Embark on a cooperative adventure about relationships.',
      category: 'Adventure',
      activePlayers: 98,
      rating: 4.8,
      reviewCount: 789
    },
    {
      id: 19,
      title: 'Assassin\'s Creed Valhalla',
      description: 'Live the Viking saga in medieval England.',
      category: 'Adventure',
      activePlayers: 156,
      rating: 4.2,
      reviewCount: 934
    },
    {
      id: 20,
      title: 'Ghost of Tsushima',
      description: 'Defend Japan as the legendary Ghost samurai.',
      category: 'Adventure',
      activePlayers: 134,
      rating: 4.7,
      reviewCount: 878
    },
  
    // RPG Games (10)
    {
      id: 21,
      title: 'Baldur\'s Gate 3',
      description: 'Gather your party and return to the Forgotten Realms.',
      category: 'RPG',
      activePlayers: 189,
      rating: 4.8,
      reviewCount: 1450
    },
    {
      id: 22,
      title: 'The Witcher 3: Wild Hunt',
      description: 'Hunt monsters and shape the fate of the Continent.',
      category: 'RPG',
      activePlayers: 167,
      rating: 4.9,
      reviewCount: 1560
    },
    {
      id: 23,
      title: 'Elden Ring',
      description: 'Become the Elden Lord in this vast open-world RPG.',
      category: 'RPG',
      activePlayers: 178,
      rating: 4.7,
      reviewCount: 1230
    },
    {
      id: 24,
      title: 'Final Fantasy XVI',
      description: 'Experience an epic tale of revenge and redemption.',
      category: 'RPG',
      activePlayers: 145,
      rating: 4.5,
      reviewCount: 890
    },
    {
      id: 25,
      title: 'Persona 5 Royal',
      description: 'Live a double life as a student and phantom thief.',
      category: 'RPG',
      activePlayers: 112,
      rating: 4.8,
      reviewCount: 945
    },
    {
      id: 26,
      title: 'Dragon Age: Inquisition',
      description: 'Lead the Inquisition to save Thedas from chaos.',
      category: 'RPG',
      activePlayers: 89,
      rating: 4.4,
      reviewCount: 867
    },
    {
      id: 27,
      title: 'Divinity: Original Sin 2',
      description: 'Master deep tactical combat in this classic RPG.',
      category: 'RPG',
      activePlayers: 98,
      rating: 4.7,
      reviewCount: 789
    },
    {
      id: 28,
      title: 'Mass Effect Legendary Edition',
      description: 'Command the Normandy in this sci-fi RPG trilogy.',
      category: 'RPG',
      activePlayers: 134,
      rating: 4.6,
      reviewCount: 923
    },
    {
      id: 29,
      title: 'Starfield',
      description: 'Explore the cosmos in this space-faring RPG.',
      category: 'RPG',
      activePlayers: 156,
      rating: 4.3,
      reviewCount: 878
    },
    {
      id: 30,
      title: 'Diablo IV',
      description: 'Battle the forces of Hell in this action RPG.',
      category: 'RPG',
      activePlayers: 198,
      rating: 4.4,
      reviewCount: 1120
    },
  
    // Strategy Games (10)
    {
      id: 31,
      title: 'Dota 2',
      description: 'Master the battlefield in this competitive MOBA.',
      category: 'Strategy',
      activePlayers: 234,
      rating: 4.3,
      reviewCount: 1780
    },
    {
      id: 32,
      title: 'Civilization VI',
      description: 'Build an empire to stand the test of time.',
      category: 'Strategy',
      activePlayers: 156,
      rating: 4.6,
      reviewCount: 890
    },
    {
      id: 33,
      title: 'Age of Empires IV',
      description: 'Command historical civilizations to victory.',
      category: 'Strategy',
      activePlayers: 123,
      rating: 4.5,
      reviewCount: 678
    },
    {
      id: 34,
      title: 'Total War: Warhammer III',
      description: 'Lead fantastic armies in epic battles.',
      category: 'Strategy',
      activePlayers: 145,
      rating: 4.7,
      reviewCount: 756
    },
    {
      id: 35,
      title: 'XCOM 2',
      description: 'Save Earth from alien occupation.',
      category: 'Strategy',
      activePlayers: 89,
      rating: 4.6,
      reviewCount: 645
    },
    {
      id: 36,
      title: 'Stellaris',
      description: 'Build and manage your own space empire.',
      category: 'Strategy',
      activePlayers: 112,
      rating: 4.4,
      reviewCount: 567
    },
    {
      id: 37,
      title: 'Crusader Kings III',
      description: 'Write your dynasty\'s medieval saga.',
      category: 'Strategy',
      activePlayers: 98,
      rating: 4.5,
      reviewCount: 678
    },
    {
      id: 38,
      title: 'Frostpunk',
      description: 'Lead the last city on Earth through a frozen apocalypse.',
      category: 'Strategy',
      activePlayers: 67,
      rating: 4.6,
      reviewCount: 589
    },
    {
      id: 39,
      title: 'Company of Heroes 3',
      description: 'Command WW2 forces in tactical combat.',
      category: 'Strategy',
      activePlayers: 78,
      rating: 4.2,
      reviewCount: 456
    },
    {
      id: 40,
      title: 'Into the Breach',
      description: 'Save humanity with perfect tactical precision.',
      category: 'Strategy',
      activePlayers: 56,
      rating: 4.8,
      reviewCount: 678
    },
  
    // Simulation Games (10)
    {
      id: 41,
      title: 'Stardew Valley',
      description: 'Build your dream farm in this cozy life sim.',
      category: 'Simulation',
      activePlayers: 189,
      rating: 4.8,
      reviewCount: 1340
    },
    {
      id: 42,
      title: 'Microsoft Flight Simulator',
      description: 'Experience the most realistic flight simulation.',
      category: 'Simulation',
      activePlayers: 145,
      rating: 4.7,
      reviewCount: 890
    },
    {
      id: 43,
      title: 'Cities: Skylines II',
      description: 'Create and manage your perfect city.',
      category: 'Simulation',
      activePlayers: 167,
      rating: 4.5,
      reviewCount: 756
    },
    {
      id: 44,
      title: 'Euro Truck Simulator 2',
      description: 'Drive across Europe as a truck driver.',
      category: 'Simulation',
      activePlayers: 134,
      rating: 4.6,
      reviewCount: 923
    },
    {
      id: 45,
      title: 'The Sims 4',
      description: 'Create and control people in a virtual world.',
      category: 'Simulation',
      activePlayers: 198,
      rating: 4.4,
      reviewCount: 1560
    },
    {
      id: 46,
      title: 'Planet Zoo',
      description: 'Build and manage the ultimate wildlife park.',
      category: 'Simulation',
      activePlayers: 89,
      rating: 4.5,
      reviewCount: 678
    },
    {
      id: 47,
      title: 'Farming Simulator 22',
      description: 'Experience modern farming operations.',
      category: 'Simulation',
      activePlayers: 112,
      rating: 4.3,
      reviewCount: 567
    },
    {
      id: 48,
      title: 'Two Point Hospital',
      description: 'Build and manage quirky hospitals.',
      category: 'Simulation',
      activePlayers: 78,
      rating: 4.4,
      reviewCount: 456
    },
    {
      id: 49,
      title: 'House Flipper',
      description: 'Renovate and sell houses for profit.',
      category: 'Simulation',
      activePlayers: 67,
      rating: 4.2,
      reviewCount: 345
    },
    {
      id: 50,
      title: 'PowerWash Simulator',
      description: 'Find satisfaction in cleaning everything.',
      category: 'Simulation',
      activePlayers: 89,
      rating: 4.6,
      reviewCount: 567
    },
  
    // Sports & Racing Games (10)
    {
      id: 51,
      title: 'EA Sports FC 24',
      description: 'The next evolution of football gaming.',
      category: 'Sports & Racing',
      activePlayers: 234,
      rating: 4.3,
      reviewCount: 1230
    },
    {
      id: 52,
      title: 'Forza Horizon 5',
      description: 'Race through a stunning open world Mexico.',
      category: 'Sports & Racing',
      activePlayers: 189,
      rating: 4.8,
      reviewCount: 980
    },
    {
      id: 53,
      title: 'NBA 2K24',
      description: 'Experience the best in basketball simulation.',
      category: 'Sports & Racing',
      activePlayers: 167,
      rating: 4.2,
      reviewCount: 890
    },
    {
      id: 54,
      title: 'F1 23',
      description: 'Race in the premier motorsport competition.',
      category: 'Sports & Racing',
      activePlayers: 145,
      rating: 4.4,
      reviewCount: 678
    },
    {
      id: 55,
      title: 'Gran Turismo 7',
      description: 'The real driving simulator returns.',
      category: 'Sports & Racing',
      activePlayers: 156,
      rating: 4.5,
      reviewCount: 789
    },
    {
      id: 56,
      title: 'WWE 2K23',
      description: 'Step into the ring with WWE superstars.',
      category: 'Sports & Racing',
      activePlayers: 89,
      rating: 4.1,
      reviewCount: 567
    },
    {
      id: 57,
      title: 'Riders Republic',
      description: 'Extreme sports in an open world playground.',
      category: 'Sports & Racing',
      activePlayers: 78,
      rating: 4.2,
      reviewCount: 456
    },
    {
      id: 58,
      title: 'MLB The Show 23',
      description: 'Play America\'s favorite pastime.',
      category: 'Sports & Racing',
      activePlayers: 112,
      rating: 4.3,
      reviewCount: 678
    },
    {
      id: 59,
      title: 'Tony Hawk\'s Pro Skater 1+2',
      description: 'Classic skateboarding games remastered.',
      category: 'Sports & Racing',
      activePlayers: 67,
      rating: 4.7,
      reviewCount: 890
    },
    {
      id: 60,
      title: 'Need for Speed Unbound',
      description: 'Street racing with style and attitude.',
      category: 'Sports & Racing',
      activePlayers: 98,
      rating: 4.0,
      reviewCount: 567
    },
  
    // Indie Games (10)
    {
      id: 61,
      title: 'Hollow Knight',
      description: 'Explore a vast underground kingdom.',
      category: 'Indie',
      activePlayers: 145,
      rating: 4.9,
      reviewCount: 1230
    },
    {
      id: 62,
      title: 'Celeste',
      description: 'A challenging platformer about climbing a mountain.',
      category: 'Indie',
      activePlayers: 89,
      rating: 4.8,
      reviewCount: 890
    },
    {
      id: 63,
      title: 'Undertale',
      description: 'A unique RPG where nobody has to die.',
      category: 'Indie',
      activePlayers: 112,
      rating: 4.7,
      reviewCount: 1120
    },
    {
      id: 64,
      title: 'Disco Elysium',
      description: 'A groundbreaking role playing experience.',
      category: 'Indie',
      activePlayers: 78,
      rating: 4.8,
      reviewCount: 678
    },
    {
      id: 65,
      title: 'Outer Wilds',
      description: 'Explore a mysterious solar system.',
      category: 'Indie',
      activePlayers: 67,
      rating: 4.9,
      reviewCount: 789
    },
    {
      id: 66,
      title: 'Slay the Spire',
      description: 'Deck-building roguelike perfection.',
      category: 'Indie',
      activePlayers: 134,
      rating: 4.7,
      reviewCount: 890
    },
    {
      id: 67,
      title: 'Valheim',
      description: 'Survive and thrive in a Norse afterlife.',
      category: 'Indie',
      activePlayers: 189,
      rating: 4.6,
      reviewCount: 945
    },
    {
      id: 68,
      title: 'Vampire Survivors',
      description: 'Survive endless waves of monsters.',
      category: 'Indie',
      activePlayers: 156,
      rating: 4.5,
      reviewCount: 678
    },
    {
      id: 69,
      title: 'Cult of the Lamb',
      description: 'Build your following in a cute but dark world.',
      category: 'Indie',
      activePlayers: 98,
      rating: 4.4,
      reviewCount: 567
    },
    {
      id: 70,
      title: 'Satisfactory',
      description: 'Build massive factories in 3D.',
      category: 'Indie',
      activePlayers: 123,
      rating: 4.7,
      reviewCount: 789
    },
  
    // Free to Play Games (10)
    {
      id: 71,
      title: 'Fortnite',
      description: 'The battle royale phenomenon.',
      category: 'Free to Play',
      activePlayers: 234,
      rating: 4.4,
      reviewCount: 2340
    },
    {
      id: 72,
      title: 'League of Legends',
      description: 'The world\'s most popular MOBA.',
      category: 'Free to Play',
      activePlayers: 289,
      rating: 4.3,
      reviewCount: 1890
    },
    {
      id: 73,
      title: 'Warframe',
      description: 'Space ninjas fighting through the solar system.',
      category: 'Free to Play',
      activePlayers: 167,
      rating: 4.5,
      reviewCount: 1230
    },
    {
      id: 74,
      title: 'Path of Exile',
      description: 'Deep action RPG with endless customization.',
      category: 'Free to Play',
      activePlayers: 145,
      rating: 4.6,
      reviewCount: 890
    },
    {
      id: 75,
      title: 'Genshin Impact',
      description: 'Explore a vast anime-style open world.',
      category: 'Free to Play',
      activePlayers: 198,
      rating: 4.4,
      reviewCount: 1560
    },
    {
      id: 76,
      title: 'Destiny 2',
      description: 'Become a Guardian of the Last City.',
      category: 'Free to Play',
      activePlayers: 178,
      rating: 4.2,
      reviewCount: 1120
    },
    {
      id: 77,
      title: 'Apex Legends',
      description: 'Hero-based battle royale action.',
      category: 'Free to Play',
      activePlayers: 212,
      rating: 4.5,
      reviewCount: 1450
    },
    {
      id: 78,
      title: 'Lost Ark',
      description: 'MMO action RPG with deep systems.',
      category: 'Free to Play',
      activePlayers: 156,
      rating: 4.3,
      reviewCount: 890
    },
    {
      id: 79,
      title: 'Valorant',
      description: 'Tactical shooter with hero abilities.',
      category: 'Free to Play',
      activePlayers: 189,
      rating: 4.4,
      reviewCount: 1230
    },
    {
      id: 80,
      title: 'Rocket League',
      description: 'Soccer meets racing in this unique sport.',
      category: 'Free to Play',
      activePlayers: 167,
      rating: 4.7,
      reviewCount: 1560
    },
  
    // MMO Games (10)
    {
      id: 81,
      title: 'Final Fantasy XIV',
      description: 'Experience an epic MMO saga.',
      category: 'MMO',
      activePlayers: 234,
      rating: 4.8,
      reviewCount: 1670
    },
    {
      id: 82,
      title: 'World of Warcraft',
      description: 'The legendary MMO continues to evolve.',
      category: 'MMO',
      activePlayers: 289,
      rating: 4.5,
      reviewCount: 2340
    },
    {
      id: 83,
      title: 'The Elder Scrolls Online',
      description: 'Explore Tamriel with friends.',
      category: 'MMO',
      activePlayers: 178,
      rating: 4.4,
      reviewCount: 1230
    },
    {
      id: 84,
      title: 'Black Desert Online',
      description: 'Action combat in a vast fantasy world.',
      category: 'MMO',
      activePlayers: 156,
      rating: 4.2,
      reviewCount: 890
    },
    {
      id: 85,
      title: 'Guild Wars 2',
      description: 'Dynamic events in a living world.',
      category: 'MMO',
      activePlayers: 145,
      rating: 4.6,
      reviewCount: 978
    },
    {
      id: 86,
      title: 'Star Wars: The Old Republic',
      description: 'Choose your path in the Star Wars galaxy.',
      category: 'MMO',
      activePlayers: 123,
      rating: 4.3,
      reviewCount: 867
    },
    {
      id: 87,
      title: 'New World',
      description: 'Colonize a supernatural continent.',
      category: 'MMO',
      activePlayers: 112,
      rating: 4.0,
      reviewCount: 756
    },
    {
      id: 88,
      title: 'RuneScape',
      description: 'The classic MMO reimagined.',
      category: 'MMO',
      activePlayers: 198,
      rating: 4.4,
      reviewCount: 1120
    },
    {
      id: 89,
      title: 'Albion Online',
      description: 'Player-driven economy and combat.',
      category: 'MMO',
      activePlayers: 134,
      rating: 4.2,
      reviewCount: 678
    },
    {
      id: 90,
      title: 'EVE Online',
      description: 'Space exploration and warfare.',
      category: 'MMO',
      activePlayers: 145,
      rating: 4.5,
      reviewCount: 890
    },
  
    // Casual Games (10)
    {
      id: 91,
      title: 'Among Us',
      description: 'Find the impostor among your crew.',
      category: 'Casual',
      activePlayers: 189,
      rating: 4.5,
      reviewCount: 1670
    },
    {
      id: 92,
      title: 'Fall Guys',
      description: 'Compete in silly obstacle courses.',
      category: 'Casual',
      activePlayers: 167,
      rating: 4.3,
      reviewCount: 1230
    },
    {
      id: 93,
      title: 'Overcooked! 2',
      description: 'Chaotic cooperative cooking action.',
      category: 'Casual',
      activePlayers: 134,
      rating: 4.6,
      reviewCount: 890
    },
    {
      id: 94,
      title: 'Untitled Goose Game',
      description: 'Cause mischief as a troublesome goose.',
      category: 'Casual',
      activePlayers: 78,
      rating: 4.7,
      reviewCount: 678
    },
    {
      id: 95,
      title: 'Moving Out',
      description: 'Cooperative moving company chaos.',
      category: 'Casual',
      activePlayers: 89,
      rating: 4.4,
      reviewCount: 567
    },
    {
      id: 96,
      title: 'Human: Fall Flat',
      description: 'Physics-based puzzle platforming fun.',
      category: 'Casual',
      activePlayers: 112,
      rating: 4.5,
      reviewCount: 789
    },
    {
      id: 97,
      title: 'Golf With Your Friends',
      description: 'Multiplayer mini golf madness.',
      category: 'Casual',
      activePlayers: 98,
      rating: 4.2,
      reviewCount: 456
    },
    {
      id: 98,
      title: 'Jackbox Party Pack 9',
      description: 'Party games for everyone.',
      category: 'Casual',
      activePlayers: 145,
      rating: 4.6,
      reviewCount: 678
    },
    {
      id: 99,
      title: 'Goat Simulator 3',
      description: 'More chaotic goat action than ever.',
      category: 'Casual',
      activePlayers: 67,
      rating: 4.1,
      reviewCount: 445
    },
    {
      id: 100,
      title: 'Unpacking',
      description: 'A zen puzzle game about moving house.',
      category: 'Casual',
      activePlayers: 56,
      rating: 4.8,
      reviewCount: 567
    },
  
    // Horror Games (10)
    {
      id: 101,
      title: 'Dead Space Remake',
      description: 'Survive the USG Ishimura.',
      category: 'Horror',
      activePlayers: 145,
      rating: 4.8,
      reviewCount: 890
    },
    {
      id: 102,
      title: 'Resident Evil Village',
      description: 'Face supernatural horrors in a remote village.',
      category: 'Horror',
      activePlayers: 134,
      rating: 4.7,
      reviewCount: 1230
    },
    {
      id: 103,
      title: 'Amnesia: The Bunker',
      description: 'Survive in a WW1 bunker.',
      category: 'Horror',
      activePlayers: 89,
      rating: 4.5,
      reviewCount: 567
    },
    {
      id: 104,
      title: 'Outlast 2',
      description: 'Investigate a rural cult.',
      category: 'Horror',
      activePlayers: 78,
      rating: 4.4,
      reviewCount: 678
    },
    {
      id: 105,
      title: 'Layers of Fear',
      description: 'Psychological horror in an artist\'s mansion.',
      category: 'Horror',
      activePlayers: 67,
      rating: 4.3,
      reviewCount: 456
    },

      // Continuing Horror Games...
    {
      id: 106,
      title: 'Phasmophobia',
      description: 'Cooperative ghost hunting investigation.',
      category: 'Horror',
      activePlayers: 156,
      rating: 4.6,
      reviewCount: 890
    },
    {
      id: 107,
      title: 'The Quarry',
      description: 'Interactive horror drama.',
      category: 'Horror',
      activePlayers: 89,
      rating: 4.4,
      reviewCount: 567
    },
    {
      id: 108,
      title: 'SOMA',
      description: 'Existential horror in an underwater facility.',
      category: 'Horror',
      activePlayers: 45,
      rating: 4.7,
      reviewCount: 678
    },
    {
      id: 109,
      title: 'Little Nightmares II',
      description: 'Atmospheric horror platforming.',
      category: 'Horror',
      activePlayers: 78,
      rating: 4.6,
      reviewCount: 789
    },
    {
      id: 110,
      title: 'Alien: Isolation',
      description: 'Survive against the perfect organism.',
      category: 'Horror',
      activePlayers: 67,
      rating: 4.8,
      reviewCount: 890
    },

    // Puzzle Games (10)
    {
      id: 111,
      title: 'Portal 2',
      description: 'Think with portals in this mind-bending puzzle game.',
      category: 'Puzzle',
      activePlayers: 123,
      rating: 4.9,
      reviewCount: 1450
    },
    {
      id: 112,
      title: 'Baba Is You',
      description: 'Change the rules to solve puzzles.',
      category: 'Puzzle',
      activePlayers: 67,
      rating: 4.8,
      reviewCount: 678
    },
    {
      id: 113,
      title: 'The Witness',
      description: 'Explore an island full of mysterious puzzles.',
      category: 'Puzzle',
      activePlayers: 45,
      rating: 4.7,
      reviewCount: 890
    },
    {
      id: 114,
      title: 'Tetris Effect: Connected',
      description: 'The classic puzzle game reimagined.',
      category: 'Puzzle',
      activePlayers: 189,
      rating: 4.8,
      reviewCount: 567
    },
    {
      id: 115,
      title: 'Return to Monkey Island',
      description: 'Classic adventure puzzle-solving.',
      category: 'Puzzle',
      activePlayers: 78,
      rating: 4.6,
      reviewCount: 456
    },
    {
      id: 116,
      title: 'Superliminal',
      description: 'Perspective-based puzzle solving.',
      category: 'Puzzle',
      activePlayers: 56,
      rating: 4.5,
      reviewCount: 345
    },
    {
      id: 117,
      title: 'The Talos Principle',
      description: 'Philosophical first-person puzzler.',
      category: 'Puzzle',
      activePlayers: 89,
      rating: 4.7,
      reviewCount: 678
    },
    {
      id: 118,
      title: 'We Were Here Forever',
      description: 'Cooperative puzzle solving.',
      category: 'Puzzle',
      activePlayers: 112,
      rating: 4.4,
      reviewCount: 456
    },
    {
      id: 119,
      title: 'Escape Simulator',
      description: 'Virtual escape room challenges.',
      category: 'Puzzle',
      activePlayers: 134,
      rating: 4.5,
      reviewCount: 567
    },
    {
      id: 120,
      title: 'A Little to the Left',
      description: 'Cozy organizing puzzle game.',
      category: 'Puzzle',
      activePlayers: 45,
      rating: 4.3,
      reviewCount: 234
    },

    // Fighting Games (10)
    {
      id: 121,
      title: 'Street Fighter 6',
      description: 'The legendary fighting game series returns.',
      category: 'Fighting',
      activePlayers: 189,
      rating: 4.7,
      reviewCount: 890
    },
    {
      id: 122,
      title: 'Mortal Kombat 1',
      description: 'Brutal fighting action reimagined.',
      category: 'Fighting',
      activePlayers: 234,
      rating: 4.6,
      reviewCount: 1230
    },
    {
      id: 123,
      title: 'Tekken 8',
      description: 'The next generation of fighting games.',
      category: 'Fighting',
      activePlayers: 167,
      rating: 4.8,
      reviewCount: 678
    },
    {
      id: 124,
      title: 'Guilty Gear Strive',
      description: 'Stylish anime fighting action.',
      category: 'Fighting',
      activePlayers: 145,
      rating: 4.7,
      reviewCount: 567
    },
    {
      id: 125,
      title: 'MultiVersus',
      description: 'Platform fighter with popular characters.',
      category: 'Fighting',
      activePlayers: 198,
      rating: 4.2,
      reviewCount: 890
    },
    {
      id: 126,
      title: 'Dragon Ball FighterZ',
      description: 'Anime fighting perfection.',
      category: 'Fighting',
      activePlayers: 156,
      rating: 4.6,
      reviewCount: 789
    },
    {
      id: 127,
      title: 'The King of Fighters XV',
      description: 'Classic team-based fighting.',
      category: 'Fighting',
      activePlayers: 89,
      rating: 4.4,
      reviewCount: 456
    },
    {
      id: 128,
      title: 'Nickelodeon All-Star Brawl 2',
      description: 'Cartoon character combat.',
      category: 'Fighting',
      activePlayers: 78,
      rating: 4.1,
      reviewCount: 345
    },
    {
      id: 129,
      title: 'Brawlhalla',
      description: 'Free-to-play platform fighting.',
      category: 'Fighting',
      activePlayers: 212,
      rating: 4.3,
      reviewCount: 678
    },
    {
      id: 130,
      title: 'Skullgirls 2nd Encore',
      description: 'Hand-drawn fighting action.',
      category: 'Fighting',
      activePlayers: 67,
      rating: 4.7,
      reviewCount: 456
    },

    // Battle Royale Games (10)
    {
      id: 131,
      title: 'PUBG: BATTLEGROUNDS',
      description: 'The original battle royale experience.',
      category: 'Battle Royale',
      activePlayers: 289,
      rating: 4.3,
      reviewCount: 2340
    },
    {
      id: 132,
      title: 'Fortnite',
      description: 'Build and battle in this popular BR game.',
      category: 'Battle Royale',
      activePlayers: 345,
      rating: 4.4,
      reviewCount: 3450
    },
    {
      id: 133,
      title: 'Call of Duty: Warzone',
      description: 'Fast-paced military battle royale.',
      category: 'Battle Royale',
      activePlayers: 278,
      rating: 4.2,
      reviewCount: 1890
    },
    {
      id: 134,
      title: 'Apex Legends',
      description: 'Hero-based battle royale shooter.',
      category: 'Battle Royale',
      activePlayers: 256,
      rating: 4.5,
      reviewCount: 1670
    },
    {
      id: 135,
      title: 'Fall Guys',
      description: 'Battle royale party game.',
      category: 'Battle Royale',
      activePlayers: 189,
      rating: 4.3,
      reviewCount: 890
    },
    {
      id: 136,
      title: 'Naraka: Bladepoint',
      description: 'Martial arts battle royale.',
      category: 'Battle Royale',
      activePlayers: 145,
      rating: 4.1,
      reviewCount: 567
    },
    {
      id: 137,
      title: 'Vampire: The Masquerade - Blood Hunt',
      description: 'Vampire-themed battle royale.',
      category: 'Battle Royale',
      activePlayers: 89,
      rating: 3.9,
      reviewCount: 456
    },
    {
      id: 138,
      title: 'Super People',
      description: 'Super-powered battle royale action.',
      category: 'Battle Royale',
      activePlayers: 112,
      rating: 4.0,
      reviewCount: 345
    },
    {
      id: 139,
      title: 'Rumbleverse',
      description: 'Wrestling-themed battle royale.',
      category: 'Battle Royale',
      activePlayers: 78,
      rating: 3.8,
      reviewCount: 234
    },
    {
      id: 140,
      title: 'Spellbreak',
      description: 'Magic-based battle royale combat.',
      category: 'Battle Royale',
      activePlayers: 56,
      rating: 4.0,
      reviewCount: 345
    },

    // Visual Novel Games (10)
    {
      id: 141,
      title: 'Steins;Gate',
      description: 'Time-traveling scientific adventure.',
      category: 'Visual Novel',
      activePlayers: 89,
      rating: 4.9,
      reviewCount: 890
    },
    {
      id: 142,
      title: 'Danganronpa V3',
      description: 'Murder mystery in a deadly game.',
      category: 'Visual Novel',
      activePlayers: 78,
      rating: 4.8,
      reviewCount: 678
    },
    {
      id: 143,
      title: 'VA-11 Hall-A',
      description: 'Cyberpunk bartending action.',
      category: 'Visual Novel',
      activePlayers: 56,
      rating: 4.7,
      reviewCount: 456
    },
    {
      id: 144,
      title: 'Phoenix Wright: Ace Attorney Trilogy',
      description: 'Courtroom drama and investigation.',
      category: 'Visual Novel',
      activePlayers: 112,
      rating: 4.8,
      reviewCount: 789
    },
    {
      id: 145,
      title: 'Doki Doki Literature Club Plus!',
      description: 'Not your typical dating sim.',
      category: 'Visual Novel',
      activePlayers: 67,
      rating: 4.9,
      reviewCount: 1230
    },
    {
      id: 146,
      title: 'The House in Fata Morgana',
      description: 'Gothic romance through time.',
      category: 'Visual Novel',
      activePlayers: 45,
      rating: 4.9,
      reviewCount: 345
    },
    {
      id: 147,
      title: '13 Sentinels: Aegis Rim',
      description: 'Sci-fi mystery with mechs.',
      category: 'Visual Novel',
      activePlayers: 89,
      rating: 4.8,
      reviewCount: 567
    },
    {
      id: 148,
      title: 'AI: The Somnium Files',
      description: 'Investigate crimes in dreams.',
      category: 'Visual Novel',
      activePlayers: 67,
      rating: 4.7,
      reviewCount: 456
    },
    {
      id: 149,
      title: 'Clannad',
      description: 'Emotional slice-of-life story.',
      category: 'Visual Novel',
      activePlayers: 34,
      rating: 4.9,
      reviewCount: 678
    },
    {
      id: 150,
      title: 'Zero Escape: The Nonary Games',
      description: 'Escape room thriller series.',
      category: 'Visual Novel',
      activePlayers: 45,
      rating: 4.8,
      reviewCount: 567
    }
  ];

  get filteredGames() {
    if (this.selectedCategory === 'All') {
      return this.games;
    }
    return this.games.filter(game => game.category === this.selectedCategory);
  }
}