import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface Review {
  username: string;
  rating: number;
  text: string;
  date: string;
}

interface Game {
  id: number;
  title: string;
  reviews: Review[];
}

@Component({
  selector: 'app-game-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './game-reviews.component.html',
  styleUrls: ['./game-reviews.component.css']
})
export class GameReviewsComponent implements OnInit {
  game: Game | null = null;
  showReviewForm = false;
  newReview = {
    rating: 0,
    text: ''
  };

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
      },
      {
        username: 'CompetitiveGamer',
        rating: 5,
        text: 'The new smoke mechanics and improved hit registration make this the best CS yet.',
        date: '2024-03-13'
      }
    ],
    2: [ // Call of Duty: Modern Warfare III
      {
        username: 'WarVeteran',
        rating: 4,
        text: 'Solid multiplayer experience with great gunplay.',
        date: '2024-03-15'
      },
      {
        username: 'CampaignLover',
        rating: 4,
        text: 'Campaign is intense but a bit short. Multiplayer makes up for it.',
        date: '2024-03-14'
      },
      {
        username: 'FPSMaster',
        rating: 5,
        text: 'Best CoD in years. Maps are well-designed.',
        date: '2024-03-13'
      },
      {
        username: 'CasualPlayer',
        rating: 4,
        text: 'Fun but can be overwhelming for new players.',
        date: '2024-03-12'
      }
    ],
    3: [ // Doom Eternal
      {
        username: 'DoomSlayer',
        rating: 5,
        text: 'The perfect blend of action, strategy, and metal music!',
        date: '2024-03-15'
      },
      {
        username: 'GoreEnthusiast',
        rating: 5,
        text: 'Combat is like a violent ballet. Absolutely stunning.',
        date: '2024-03-14'
      },
      {
        username: 'SpeedRunner',
        rating: 5,
        text: 'Movement mechanics are incredible. So much depth.',
        date: '2024-03-13'
      }
    ],
    4: [ // Devil May Cry 5
      {
        username: 'ComboMaster',
        rating: 5,
        text: 'The combat system is deep and rewarding. SSStylish!',
        date: '2024-03-15'
      },
      {
        username: 'ActionFan',
        rating: 4,
        text: 'Great gameplay but story could be better.',
        date: '2024-03-14'
      },
      {
        username: 'HackNSlash',
        rating: 5,
        text: 'Three unique characters, endless combo possibilities.',
        date: '2024-03-13'
      }
    ],
    5: [ // Resident Evil 4 Remake
      {
        username: 'SurvivalExpert',
        rating: 5,
        text: 'Perfect remake that respects the original while modernizing it.',
        date: '2024-03-15'
      },
      {
        username: 'HorrorGamer',
        rating: 5,
        text: 'The tension and atmosphere are perfectly preserved.',
        date: '2024-03-14'
      },
      {
        username: 'ClassicFan',
        rating: 5,
        text: 'They actually improved on perfection. Amazing remake.',
        date: '2024-03-13'
      },
      {
        username: 'NewPlayer',
        rating: 4,
        text: 'Excellent game even for those who never played the original.',
        date: '2024-03-12'
      }
    ],
    6: [ // God of War Ragnarök
      {
        username: 'NorseMythology',
        rating: 5,
        text: 'Epic conclusion to the Norse saga. Emotional storytelling.',
        date: '2024-03-15'
      },
      {
        username: 'ActionRPGFan',
        rating: 5,
        text: 'Combat is even better than the previous game.',
        date: '2024-03-14'
      },
      {
        username: 'StoryLover',
        rating: 5,
        text: 'The character development and writing are outstanding.',
        date: '2024-03-13'
      }
    ],
    7: [ // Sekiro: Shadows Die Twice
      {
        username: 'SoulsBorne',
        rating: 5,
        text: 'The combat system is revolutionary. Parrying feels amazing.',
        date: '2024-03-15'
      },
      {
        username: 'NinjaGamer',
        rating: 4,
        text: 'Challenging but fair. The satisfaction of beating bosses is unmatched.',
        date: '2024-03-14'
      },
      {
        username: 'SamuraiFan',
        rating: 5,
        text: 'Perfect blend of stealth and combat. Great feudal Japan setting.',
        date: '2024-03-13'
      }
    ],
    8: [ // Monster Hunter World
      {
        username: 'MonsterSlayer',
        rating: 5,
        text: 'The most accessible Monster Hunter yet. Amazing ecosystem.',
        date: '2024-03-15'
      },
      {
        username: 'GrindMaster',
        rating: 4,
        text: 'Endless content and satisfying progression system.',
        date: '2024-03-14'
      },
      {
        username: 'CoopPlayer',
        rating: 5,
        text: 'Best cooperative hunting experience. Great community.',
        date: '2024-03-13'
      }
    ],
    9: [ // Hades
      {
        username: 'RogueLiker',
        rating: 5,
        text: 'Perfect roguelike with amazing story integration.',
        date: '2024-03-15'
      },
      {
        username: 'MythologyBuff',
        rating: 5,
        text: 'Greek mythology has never been more entertaining.',
        date: '2024-03-14'
      },
      {
        username: 'ArtLover',
        rating: 5,
        text: 'Gorgeous art style and incredible voice acting.',
        date: '2024-03-13'
      },
      {
        username: 'StoryGamer',
        rating: 5,
        text: 'Every run reveals new dialogue and story elements. Brilliant!',
        date: '2024-03-12'
      }
    ],
    10: [ // Star Wars Jedi: Survivor
      {
        username: 'StarWarsFan',
        rating: 4,
        text: 'Great continuation of Cal\'s story. Combat is much improved.',
        date: '2024-03-15'
      },
      {
        username: 'LightsaberMaster',
        rating: 5,
        text: 'The different combat stances add great variety.',
        date: '2024-03-14'
      },
      {
        username: 'ExplorationLover',
        rating: 4,
        text: 'Open world areas are fun to explore but could use more content.',
        date: '2024-03-13'
      }
    ],
    11: [ // Red Dead Redemption 2
      {
        username: 'WesternFan',
        rating: 5,
        text: 'The most immersive open world ever created. Every detail is perfect.',
        date: '2024-03-15'
      },
      {
        username: 'StoryTeller',
        rating: 5,
        text: 'Arthur Morgan\'s story is a masterpiece of character development.',
        date: '2024-03-14'
      },
      {
        username: 'OpenWorldLover',
        rating: 5,
        text: 'The world feels truly alive. Best Rockstar game ever.',
        date: '2024-03-13'
      },
      {
        username: 'DetailHunter',
        rating: 5,
        text: 'The attention to detail is mind-blowing. Still finding new things.',
        date: '2024-03-12'
      }
    ],
    12: [ // The Legend of Zelda: TOTK
      {
        username: 'ZeldaMaster',
        rating: 5,
        text: 'Incredible freedom in puzzle solving. The creativity possible is endless.',
        date: '2024-03-15'
      },
      {
        username: 'HyruleFan',
        rating: 5,
        text: 'Builds on BOTW in every way. The building mechanics are revolutionary.',
        date: '2024-03-14'
      },
      {
        username: 'ExplorerGamer',
        rating: 5,
        text: 'The sky islands and underground add amazing depth to exploration.',
        date: '2024-03-13'
      }
    ],
    13: [ // Uncharted 4
      {
        username: 'AdventurePro',
        rating: 5,
        text: 'Perfect sendoff for Nathan Drake. The set pieces are incredible.',
        date: '2024-03-15'
      },
      {
        username: 'CinematicGamer',
        rating: 5,
        text: 'Movie-quality storytelling with excellent gameplay.',
        date: '2024-03-14'
      },
      {
        username: 'GraphicsLover',
        rating: 4,
        text: 'Still looks amazing years later. Great character interactions.',
        date: '2024-03-13'
      }
    ],
    14: [ // A Plague Tale: Requiem
      {
        username: 'StorySeeker',
        rating: 5,
        text: 'Emotionally powerful story with stunning visuals.',
        date: '2024-03-15'
      },
      {
        username: 'AtmosphericGamer',
        rating: 4,
        text: 'Dark and compelling. The rat mechanics are unique.',
        date: '2024-03-14'
      },
      {
        username: 'NarrativeFan',
        rating: 5,
        text: 'The relationship between siblings is beautifully portrayed.',
        date: '2024-03-13'
      }
    ],
    15: [ // Sea of Thieves
      {
        username: 'PirateLegend',
        rating: 4,
        text: 'Best pirate game ever. Amazing with friends.',
        date: '2024-03-15'
      },
      {
        username: 'CrewCaptain',
        rating: 4,
        text: 'The sailing mechanics are unmatched. Great social experience.',
        date: '2024-03-14'
      },
      {
        username: 'NavalCombat',
        rating: 5,
        text: 'Ship battles are intense and rewarding.',
        date: '2024-03-13'
      },
      {
        username: 'TreasureHunter',
        rating: 4,
        text: 'Constant updates keep the game fresh and exciting.',
        date: '2024-03-12'
      }
    ],
    16: [ // Death Stranding
      {
        username: 'KojimaFan',
        rating: 5,
        text: 'Unique and thought-provoking. Nothing else like it.',
        date: '2024-03-15'
      },
      {
        username: 'WalkingSimulator',
        rating: 4,
        text: 'Surprisingly engaging delivery mechanics. Beautiful world.',
        date: '2024-03-14'
      },
      {
        username: 'StoryAnalyst',
        rating: 5,
        text: 'Complex narrative with deep themes. Masterful atmosphere.',
        date: '2024-03-13'
      }
    ],
    17: [ // Horizon Forbidden West
      {
        username: 'RobotHunter',
        rating: 5,
        text: 'Gorgeous visuals and improved combat mechanics.',
        date: '2024-03-15'
      },
      {
        username: 'OpenWorldExplorer',
        rating: 4,
        text: 'Beautiful world with lots to discover.',
        date: '2024-03-14'
      },
      {
        username: 'SciFiLover',
        rating: 5,
        text: 'The machine designs and combat variety are excellent.',
        date: '2024-03-13'
      }
    ],
    18: [ // It Takes Two
      {
        username: 'CoopMaster',
        rating: 5,
        text: 'Best cooperative experience ever. Constantly innovative.',
        date: '2024-03-15'
      },
      {
        username: 'TeamPlayer',
        rating: 5,
        text: 'Amazing variety in gameplay. Perfect for couples.',
        date: '2024-03-14'
      },
      {
        username: 'CreativeGamer',
        rating: 5,
        text: 'Every level brings something new and exciting.',
        date: '2024-03-13'
      }
    ],
    19: [ // Assassin's Creed Valhalla
      {
        username: 'VikingWarrior',
        rating: 4,
        text: 'Massive world with lots of Viking-themed content.',
        date: '2024-03-15'
      },
      {
        username: 'HistoryBuff',
        rating: 4,
        text: 'Great historical setting and interesting story.',
        date: '2024-03-14'
      },
      {
        username: 'RPGFan',
        rating: 4,
        text: 'Good RPG elements but can feel bloated at times.',
        date: '2024-03-13'
      }
    ],
    20: [ // Ghost of Tsushima
      {
        username: 'SamuraiMaster',
        rating: 5,
        text: 'Beautiful tribute to samurai cinema. Combat is perfect.',
        date: '2024-03-15'
      },
      {
        username: 'JapanHistory',
        rating: 5,
        text: 'Stunning recreation of feudal Japan. Amazing atmosphere.',
        date: '2024-03-14'
      },
      {
        username: 'CombatPro',
        rating: 5,
        text: 'The combat system is deep and satisfying.',
        date: '2024-03-13'
      },
      {
        username: 'PhotoMode',
        rating: 5,
        text: 'Most beautiful open world game ever made.',
        date: '2024-03-12'
      }
    ],
    21: [ // Baldur's Gate 3
      {
        username: 'DnDVeteran',
        rating: 5,
        text: 'The best D&D video game ever made. Incredible depth of choice.',
        date: '2024-03-15'
      },
      {
        username: 'RPGMaster',
        rating: 5,
        text: 'Sets a new standard for CRPGs. Every choice matters.',
        date: '2024-03-14'
      },
      {
        username: 'LarianFan',
        rating: 5,
        text: 'The level of reactivity to player choices is unprecedented.',
        date: '2024-03-13'
      },
      {
        username: 'StoryExplorer',
        rating: 5,
        text: 'Incredible character development and branching narratives.',
        date: '2024-03-12'
      }
    ],
    22: [ // The Witcher 3
      {
        username: 'MonsterSlayer',
        rating: 5,
        text: 'Still the gold standard for open-world RPGs.',
        date: '2024-03-15'
      },
      {
        username: 'QuestLover',
        rating: 5,
        text: 'Even side quests have better writing than most main quests in other games.',
        date: '2024-03-14'
      },
      {
        username: 'GeraltFan',
        rating: 5,
        text: 'The world and characters feel incredibly real and lived-in.',
        date: '2024-03-13'
      }
    ],
    23: [ // Elden Ring
      {
        username: 'SoulsBorne',
        rating: 5,
        text: 'Masterful open world design. Every discovery feels meaningful.',
        date: '2024-03-15'
      },
      {
        username: 'LoreMaster',
        rating: 5,
        text: 'The world building and environmental storytelling are incredible.',
        date: '2024-03-14'
      },
      {
        username: 'HardcoreGamer',
        rating: 5,
        text: 'Perfect blend of challenge and exploration.',
        date: '2024-03-13'
      },
      {
        username: 'OpenWorldFan',
        rating: 4,
        text: 'Revolutionary approach to open world design.',
        date: '2024-03-12'
      }
    ],
    24: [ // Final Fantasy XVI
      {
        username: 'FFVeteran',
        rating: 4,
        text: 'Great action combat and epic summon battles.',
        date: '2024-03-15'
      },
      {
        username: 'ActionRPG',
        rating: 5,
        text: 'The combat system is incredibly satisfying.',
        date: '2024-03-14'
      },
      {
        username: 'StoryFan',
        rating: 4,
        text: 'Mature storytelling with great character moments.',
        date: '2024-03-13'
      }
    ],
    25: [ // Persona 5 Royal
      {
        username: 'JRPGLover',
        rating: 5,
        text: 'Perfect blend of social sim and dungeon crawling.',
        date: '2024-03-15'
      },
      {
        username: 'StyleMaster',
        rating: 5,
        text: 'The most stylish JRPG ever made. Amazing soundtrack.',
        date: '2024-03-14'
      },
      {
        username: 'SocialSimFan',
        rating: 5,
        text: 'The character interactions and social links are incredible.',
        date: '2024-03-13'
      },
      {
        username: 'TimeManager',
        rating: 5,
        text: 'Every day is meaningful. Great time management gameplay.',
        date: '2024-03-12'
      }
    ],
    26: [ // Dragon Age: Inquisition
      {
        username: 'DragonSlayer',
        rating: 4,
        text: 'Vast world with engaging companion characters.',
        date: '2024-03-15'
      },
      {
        username: 'BiowareFan',
        rating: 5,
        text: 'Great story with meaningful choices. Companions are well written.',
        date: '2024-03-14'
      },
      {
        username: 'FantasyRPG',
        rating: 4,
        text: 'Epic scale with interesting political intrigue.',
        date: '2024-03-13'
      }
    ],
    27: [ // Divinity: Original Sin 2
      {
        username: 'TacticalMaster',
        rating: 5,
        text: 'The most creative combat system in any RPG.',
        date: '2024-03-15'
      },
      {
        username: 'CoopPlayer',
        rating: 5,
        text: 'Amazing in co-op. Every fight is like a puzzle.',
        date: '2024-03-14'
      },
      {
        username: 'ElementalWizard',
        rating: 5,
        text: 'Environmental interactions make combat incredibly deep.',
        date: '2024-03-13'
      },
      {
        username: 'RPGVeteran',
        rating: 5,
        text: 'Sets the bar for tactical RPG combat.',
        date: '2024-03-12'
      }
    ],
    28: [ // Mass Effect Legendary Edition
      {
        username: 'SpaceExplorer',
        rating: 5,
        text: 'The definitive way to experience this epic trilogy.',
        date: '2024-03-15'
      },
      {
        username: 'SciFiFan',
        rating: 5,
        text: 'Character relationships and choices feel so impactful.',
        date: '2024-03-14'
      },
      {
        username: 'CommanderShepard',
        rating: 4,
        text: 'Great improvements to the first game. Story holds up perfectly.',
        date: '2024-03-13'
      }
    ],
    29: [ // Starfield
      {
        username: 'SpacePioneer',
        rating: 4,
        text: 'Huge universe to explore with classic Bethesda freedom.',
        date: '2024-03-15'
      },
      {
        username: 'StarExplorer',
        rating: 4,
        text: 'Ship building and space combat are fun additions.',
        date: '2024-03-14'
      },
      {
        username: 'BethesdaFan',
        rating: 4,
        text: 'Typical Bethesda charm in a sci-fi setting.',
        date: '2024-03-13'
      }
    ],
    30: [ // Diablo IV
      {
        username: 'DungeonCrawler',
        rating: 4,
        text: 'Solid ARPG mechanics with great atmosphere.',
        date: '2024-03-15'
      },
      {
        username: 'LootHunter',
        rating: 5,
        text: 'Satisfying combat and progression system.',
        date: '2024-03-14'
      },
      {
        username: 'HellSlayer',
        rating: 4,
        text: 'Dark atmosphere and great class design.',
        date: '2024-03-13'
      }
    ],
    31: [ // Dota 2
      {
        username: 'MOBAVeteran',
        rating: 5,
        text: 'Deep strategic gameplay that keeps evolving.',
        date: '2024-03-15'
      },
      {
        username: 'TeamPlayer',
        rating: 4,
        text: 'Complex but rewarding. Great esports scene.',
        date: '2024-03-14'
      },
      {
        username: 'StrategyPro',
        rating: 4,
        text: 'Endless depth to master. Regular updates keep it fresh.',
        date: '2024-03-13'
      }
    ],
    32: [ // Civilization VI
      {
        username: '4XMaster',
        rating: 5,
        text: 'The best Civilization game yet. Great expansion content.',
        date: '2024-03-15'
      },
      {
        username: 'HistoryBuff',
        rating: 4,
        text: 'District system adds great strategic depth.',
        date: '2024-03-14'
      },
      {
        username: 'TurnBasedFan',
        rating: 5,
        text: 'One more turn syndrome at its finest.',
        date: '2024-03-13'
      }
    ],
    33: [ // Age of Empires IV
      {
        username: 'RTSVeteran',
        rating: 5,
        text: 'Perfect blend of historical accuracy and RTS gameplay.',
        date: '2024-03-15'
      },
      {
        username: 'HistoricalGamer',
        rating: 4,
        text: 'Great civilization diversity and documentary style content.',
        date: '2024-03-14'
      },
      {
        username: 'StrategyMaster',
        rating: 5,
        text: 'Excellent balance between accessibility and depth.',
        date: '2024-03-13'
      }
    ],
    34: [ // Total War: Warhammer III
      {
        username: 'WarhammerFan',
        rating: 5,
        text: 'The ultimate fantasy strategy game. Incredible faction variety.',
        date: '2024-03-15'
      },
      {
        username: 'TotalWarVet',
        rating: 4,
        text: 'Massive battles with deep campaign mechanics.',
        date: '2024-03-14'
      },
      {
        username: 'FantasyGeneral',
        rating: 5,
        text: 'Best implementation of Warhammer in gaming.',
        date: '2024-03-13'
      }
    ],
    35: [ // XCOM 2
      {
        username: 'TacticalCommander',
        rating: 5,
        text: 'Intense tactical combat with meaningful consequences.',
        date: '2024-03-15'
      },
      {
        username: 'SquadLeader',
        rating: 4,
        text: 'Great character customization and attachment to troops.',
        date: '2024-03-14'
      },
      {
        username: 'StrategyPro',
        rating: 5,
        text: 'Challenging but fair. Every mission feels crucial.',
        date: '2024-03-13'
      }
    ],
    36: [ // Stellaris
      {
        username: 'SpaceEmperor',
        rating: 4,
        text: 'Deep space strategy with endless possibilities.',
        date: '2024-03-15'
      },
      {
        username: 'GalacticRuler',
        rating: 5,
        text: 'Amazing storytelling through emergent gameplay.',
        date: '2024-03-14'
      },
      {
        username: '4XEnthusiast',
        rating: 4,
        text: 'Complex systems that create unique stories.',
        date: '2024-03-13'
      }
    ],
    37: [ // Crusader Kings III
      {
        username: 'MedievalRuler',
        rating: 5,
        text: 'The ultimate medieval dynasty simulator.',
        date: '2024-03-15'
      },
      {
        username: 'StrategyBuff',
        rating: 4,
        text: 'Incredible depth in character interactions.',
        date: '2024-03-14'
      },
      {
        username: 'DynastyBuilder',
        rating: 5,
        text: 'Every playthrough tells a unique story.',
        date: '2024-03-13'
      }
    ],
    38: [ // Frostpunk
      {
        username: 'SurvivalLeader',
        rating: 5,
        text: 'Morally challenging decisions in a brutal setting.',
        date: '2024-03-15'
      },
      {
        username: 'CityBuilder',
        rating: 4,
        text: 'Unique blend of city-building and survival.',
        date: '2024-03-14'
      },
      {
        username: 'HardChoices',
        rating: 5,
        text: 'Atmospheric and emotionally engaging.',
        date: '2024-03-13'
      }
    ],
    39: [ // Company of Heroes 3
      {
        username: 'WW2Strategist',
        rating: 4,
        text: 'Great tactical combat in Mediterranean setting.',
        date: '2024-03-15'
      },
      {
        username: 'RTSCommander',
        rating: 4,
        text: 'Dynamic campaign map adds strategic depth.',
        date: '2024-03-14'
      },
      {
        username: 'MilitaryTactician',
        rating: 4,
        text: 'Improved destruction and unit control.',
        date: '2024-03-13'
      }
    ],
    40: [ // Into the Breach
      {
        username: 'TacticsExpert',
        rating: 5,
        text: 'Perfect turn-based strategy with no RNG frustration.',
        date: '2024-03-15'
      },
      {
        username: 'PuzzleMaster',
        rating: 5,
        text: 'Every move matters. Brilliant design.',
        date: '2024-03-14'
      },
      {
        username: 'MechCommander',
        rating: 5,
        text: 'Chess-like precision in tactical combat.',
        date: '2024-03-13'
      }
    ],
    41: [ // Stardew Valley
      {
        username: 'FarmingFanatic',
        rating: 5,
        text: 'The perfect farming sim with endless charm.',
        date: '2024-03-15'
      },
      {
        username: 'PeacefulGamer',
        rating: 5,
        text: 'Relaxing gameplay with deep relationship systems.',
        date: '2024-03-14'
      },
      {
        username: 'PixelArtLover',
        rating: 5,
        text: 'Incredible amount of content and heart.',
        date: '2024-03-13'
      }
    ],
    42: [ // Microsoft Flight Simulator
      {
        username: 'PilotPro',
        rating: 5,
        text: 'Most realistic flight sim ever made.',
        date: '2024-03-15'
      },
      {
        username: 'AviationBuff',
        rating: 5,
        text: 'Stunning recreation of the entire planet.',
        date: '2024-03-14'
      },
      {
        username: 'CloudSurfer',
        rating: 4,
        text: 'Beautiful graphics and authentic flying experience.',
        date: '2024-03-13'
      }
    ],
    43: [ // Cities: Skylines II
      {
        username: 'UrbanPlanner',
        rating: 4,
        text: 'Deep city management with great graphics.',
        date: '2024-03-15'
      },
      {
        username: 'CityMayor',
        rating: 5,
        text: 'Improved systems over the original.',
        date: '2024-03-14'
      },
      {
        username: 'InfrastructurePro',
        rating: 4,
        text: 'Complex but rewarding city builder.',
        date: '2024-03-13'
      }
    ],
    44: [ // Euro Truck Simulator 2
      {
        username: 'TruckDriver',
        rating: 5,
        text: 'Relaxing and immersive trucking experience.',
        date: '2024-03-15'
      },
      {
        username: 'RoadWarrior',
        rating: 4,
        text: 'Great attention to detail in truck physics.',
        date: '2024-03-14'
      },
      {
        username: 'EuroExplorer',
        rating: 5,
        text: 'Beautiful recreation of European roads.',
        date: '2024-03-13'
      }
    ],
    45: [ // The Sims 4
      {
        username: 'LifeSimulator',
        rating: 4,
        text: 'Best character creation and home building.',
        date: '2024-03-15'
      },
      {
        username: 'CreativeBuilder',
        rating: 5,
        text: 'Endless possibilities for storytelling.',
        date: '2024-03-14'
      },
      {
        username: 'SimsVeteran',
        rating: 4,
        text: 'Great with expansions, base game needs more.',
        date: '2024-03-13'
      }
    ],
    46: [ // Planet Zoo
      {
        username: 'ZooKeeper',
        rating: 5,
        text: 'Incredible animal detail and habitat creation tools.',
        date: '2024-03-15'
      },
      {
        username: 'AnimalLover',
        rating: 4,
        text: 'Educational and fun. Great management systems.',
        date: '2024-03-14'
      },
      {
        username: 'WildlifeFan',
        rating: 5,
        text: 'Best zoo management game ever made.',
        date: '2024-03-13'
      }
    ],
    47: [ // Farming Simulator 22
      {
        username: 'FarmManager',
        rating: 4,
        text: 'Most realistic farming experience available.',
        date: '2024-03-15'
      },
      {
        username: 'TractorDriver',
        rating: 5,
        text: 'Great attention to machinery details.',
        date: '2024-03-14'
      },
      {
        username: 'AgriExpert',
        rating: 4,
        text: 'Detailed farming mechanics and seasonal system.',
        date: '2024-03-13'
      }
    ],
    48: [ // Two Point Hospital
      {
        username: 'HospitalAdmin',
        rating: 5,
        text: 'Charming and funny hospital management.',
        date: '2024-03-15'
      },
      {
        username: 'SimFanatic',
        rating: 4,
        text: 'Great humor with solid management mechanics.',
        date: '2024-03-14'
      },
      {
        username: 'HealthcarePro',
        rating: 4,
        text: 'Engaging progression and quirky diseases.',
        date: '2024-03-13'
      }
    ],
    49: [ // House Flipper
      {
        username: 'Renovator',
        rating: 4,
        text: 'Satisfying renovation and decoration gameplay.',
        date: '2024-03-15'
      },
      {
        username: 'InteriorDesigner',
        rating: 4,
        text: 'Relaxing with good attention to detail.',
        date: '2024-03-14'
      },
      {
        username: 'DIYEnthusiast',
        rating: 4,
        text: 'Great for design and renovation fans.',
        date: '2024-03-13'
      }
    ],
    50: [ // PowerWash Simulator
      {
        username: 'CleaningPro',
        rating: 5,
        text: 'Surprisingly satisfying and relaxing.',
        date: '2024-03-15'
      },
      {
        username: 'ZenGamer',
        rating: 4,
        text: 'Oddly therapeutic and addictive.',
        date: '2024-03-14'
      },
      {
        username: 'DetailCleaner',
        rating: 5,
        text: 'Perfect stress relief game.',
        date: '2024-03-13'
      }
    ],
    51: [ // EA Sports FC 24
      {
        username: 'FootballFan',
        rating: 4,
        text: 'Solid gameplay improvements over FIFA.',
        date: '2024-03-15'
      },
      {
        username: 'SoccerPro',
        rating: 4,
        text: 'Better physics and player movements.',
        date: '2024-03-14'
      },
      {
        username: 'UltimateFan',
        rating: 4,
        text: 'Good evolution from FIFA series.',
        date: '2024-03-13'
      }
    ],
    52: [ // Forza Horizon 5
      {
        username: 'RacingFanatic',
        rating: 5,
        text: 'Beautiful Mexico setting with amazing car variety.',
        date: '2024-03-15'
      },
      {
        username: 'CarCollector',
        rating: 5,
        text: 'Best open-world racing game ever.',
        date: '2024-03-14'
      },
      {
        username: 'SpeedDemon',
        rating: 5,
        text: 'Perfect blend of arcade fun and simulation.',
        date: '2024-03-13'
      }
    ],
    53: [ // NBA 2K24
      {
        username: 'BasketballFan',
        rating: 4,
        text: 'Solid basketball simulation with great graphics.',
        date: '2024-03-15'
      },
      {
        username: 'CourtMaster',
        rating: 4,
        text: 'Improved gameplay mechanics.',
        date: '2024-03-14'
      },
      {
        username: 'BballPro',
        rating: 4,
        text: 'Best basketball game available.',
        date: '2024-03-13'
      }
    ],
    54: [ // F1 23
      {
        username: 'F1Enthusiast',
        rating: 4,
        text: 'Great F1 simulation with improved handling.',
        date: '2024-03-15'
      },
      {
        username: 'RacingPro',
        rating: 5,
        text: 'Authentic F1 experience with deep career mode.',
        date: '2024-03-14'
      },
      {
        username: 'PitCrew',
        rating: 4,
        text: 'Detailed team management aspects.',
        date: '2024-03-13'
      }
    ],
    55: [ // Gran Turismo 7
      {
        username: 'GTFanatic',
        rating: 5,
        text: 'Beautiful graphics and authentic driving feel.',
        date: '2024-03-15'
      },
      {
        username: 'RacingSim',
        rating: 4,
        text: 'Great car collection and physics.',
        date: '2024-03-14'
      },
      {
        username: 'TrackMaster',
        rating: 5,
        text: 'Perfect balance of accessibility and realism.',
        date: '2024-03-13'
      }
    ],
    56: [ // WWE 2K23
      {
        username: 'WrestlingFan',
        rating: 4,
        text: 'Best wrestling game in years.',
        date: '2024-03-15'
      },
      {
        username: 'SmackdownPro',
        rating: 4,
        text: 'Improved gameplay mechanics and modes.',
        date: '2024-03-14'
      },
      {
        username: 'RingMaster',
        rating: 4,
        text: 'Great roster and creation suite.',
        date: '2024-03-13'
      }
    ],
    57: [ // Riders Republic
      {
        username: 'ExtremeSports',
        rating: 4,
        text: 'Fun variety of extreme sports activities.',
        date: '2024-03-15'
      },
      {
        username: 'AdrenlineJunkie',
        rating: 4,
        text: 'Great open world and multiplayer.',
        date: '2024-03-14'
      },
      {
        username: 'SportsFanatic',
        rating: 4,
        text: 'Exciting mix of different sports.',
        date: '2024-03-13'
      }
    ],
    58: [ // MLB The Show 23
      {
        username: 'BaseballFan',
        rating: 4,
        text: 'Most authentic baseball experience.',
        date: '2024-03-15'
      },
      {
        username: 'DiamondPro',
        rating: 5,
        text: 'Excellent gameplay and presentation.',
        date: '2024-03-14'
      },
      {
        username: 'BallparkHero',
        rating: 4,
        text: 'Deep franchise mode and mechanics.',
        date: '2024-03-13'
      }
    ],
    59: [ // Tony Hawk's Pro Skater 1+2
      {
        username: 'SkaterPro',
        rating: 5,
        text: 'Perfect remake of classic games.',
        date: '2024-03-15'
      },
      {
        username: 'OldSchool',
        rating: 5,
        text: 'Captures the original feel perfectly.',
        date: '2024-03-14'
      },
      {
        username: 'ComboMaster',
        rating: 5,
        text: 'Best skateboarding game ever made.',
        date: '2024-03-13'
      }
    ],
    60: [ // Need for Speed Unbound
      {
        username: 'StreetRacer',
        rating: 4,
        text: 'Fresh art style with solid racing.',
        date: '2024-03-15'
      },
      {
        username: 'DriftKing',
        rating: 4,
        text: 'Good customization and street racing.',
        date: '2024-03-14'
      },
      {
        username: 'NightRider',
        rating: 4,
        text: 'Unique visual style and fun pursuits.',
        date: '2024-03-13'
      }
    ],
    61: [ // Hollow Knight
      {
        username: 'MetroidFan',
        rating: 5,
        text: 'Masterpiece of metroidvania design and atmosphere.',
        date: '2024-03-15'
      },
      {
        username: 'ArtLover',
        rating: 5,
        text: 'Beautiful art style and haunting soundtrack.',
        date: '2024-03-14'
      },
      {
        username: 'HardcoreGamer',
        rating: 5,
        text: 'Challenging but fair. Amazing boss fights.',
        date: '2024-03-13'
      }
    ],
    62: [ // Celeste
      {
        username: 'PlatformMaster',
        rating: 5,
        text: 'Perfect platforming with touching story.',
        date: '2024-03-15'
      },
      {
        username: 'SpeedRunner',
        rating: 5,
        text: 'Precise controls and brilliant level design.',
        date: '2024-03-14'
      },
      {
        username: 'StorySeeker',
        rating: 5,
        text: 'Beautiful narrative about overcoming challenges.',
        date: '2024-03-13'
      }
    ],
    63: [ // Undertale
      {
        username: 'RPGLover',
        rating: 5,
        text: 'Unique and emotionally powerful storytelling.',
        date: '2024-03-15'
      },
      {
        username: 'IndieGamer',
        rating: 5,
        text: 'Subverts expectations brilliantly.',
        date: '2024-03-14'
      },
      {
        username: 'PacifistPlayer',
        rating: 5,
        text: 'Revolutionary approach to RPG mechanics.',
        date: '2024-03-13'
      }
    ],
    64: [ // Disco Elysium
      {
        username: 'StoryMaster',
        rating: 5,
        text: 'Deepest RPG writing ever created.',
        date: '2024-03-15'
      },
      {
        username: 'DetectivePro',
        rating: 5,
        text: 'Incredible character development and choices.',
        date: '2024-03-14'
      },
      {
        username: 'PhilosophyBuff',
        rating: 5,
        text: 'Thought-provoking narrative masterpiece.',
        date: '2024-03-13'
      }
    ],
    65: [ // Outer Wilds
      {
        username: 'SpaceExplorer',
        rating: 5,
        text: 'Most unique exploration game ever made.',
        date: '2024-03-15'
      },
      {
        username: 'PuzzleSolver',
        rating: 5,
        text: 'Brilliant mystery that respects player intelligence.',
        date: '2024-03-14'
      },
      {
        username: 'CosmicTraveler',
        rating: 5,
        text: 'Mind-bending story with perfect pacing.',
        date: '2024-03-13'
      }
    ],
    66: [ // Slay the Spire
      {
        username: 'DeckBuilder',
        rating: 5,
        text: 'Perfect blend of strategy and roguelike.',
        date: '2024-03-15'
      },
      {
        username: 'CardMaster',
        rating: 5,
        text: 'Endless replayability and strategic depth.',
        date: '2024-03-14'
      },
      {
        username: 'RogueFan',
        rating: 5,
        text: 'Every run feels unique and engaging.',
        date: '2024-03-13'
      }
    ],
    67: [ // Valheim
      {
        username: 'VikingChief',
        rating: 5,
        text: 'Amazing survival crafting in Norse setting.',
        date: '2024-03-15'
      },
      {
        username: 'SurvivalPro',
        rating: 4,
        text: 'Great building system and combat.',
        date: '2024-03-14'
      },
      {
        username: 'CoopPlayer',
        rating: 5,
        text: 'Best cooperative survival experience.',
        date: '2024-03-13'
      }
    ],
    68: [ // Vampire Survivors
      {
        username: 'RogueliteFan',
        rating: 5,
        text: 'Addictive gameplay loop and progression.',
        date: '2024-03-15'
      },
      {
        username: 'RetroGamer',
        rating: 4,
        text: 'Simple but incredibly engaging.',
        date: '2024-03-14'
      },
      {
        username: 'SurvivalMaster',
        rating: 5,
        text: 'Perfect pick-up-and-play game.',
        date: '2024-03-13'
      }
    ],
    69: [ // Cult of the Lamb
      {
        username: 'CultLeader',
        rating: 4,
        text: 'Unique blend of cult management and combat.',
        date: '2024-03-15'
      },
      {
        username: 'RogueMaster',
        rating: 5,
        text: 'Charming art style with dark themes.',
        date: '2024-03-14'
      },
      {
        username: 'ManagementPro',
        rating: 4,
        text: 'Creative mix of different genres.',
        date: '2024-03-13'
      }
    ],
    70: [ // Satisfactory
      {
        username: 'FactoryBuilder',
        rating: 5,
        text: 'Most satisfying factory building in 3D.',
        date: '2024-03-15'
      },
      {
        username: 'Automator',
        rating: 5,
        text: 'Endless possibilities for optimization.',
        date: '2024-03-14'
      },
      {
        username: 'EngineerPro',
        rating: 4,
        text: 'Great progression and building systems.',
        date: '2024-03-13'
      }
    ],  
    71: [ // Fortnite
      {
        username: 'BattleRoyalePro',
        rating: 4,
        text: 'Constantly evolving with fresh content.',
        date: '2024-03-15'
      },
      {
        username: 'BuildMaster',
        rating: 5,
        text: 'Unique building mechanics set it apart.',
        date: '2024-03-14'
      },
      {
        username: 'EventLover',
        rating: 4,
        text: 'Amazing live events and crossovers.',
        date: '2024-03-13'
      }
    ],
    72: [ // League of Legends
      {
        username: 'MOBAVeteran',
        rating: 4,
        text: 'Deep strategic gameplay with regular updates.',
        date: '2024-03-15'
      },
      {
        username: 'TeamPlayer',
        rating: 5,
        text: 'Excellent competitive scene and balance.',
        date: '2024-03-14'
      },
      {
        username: 'ChampionMaster',
        rating: 4,
        text: 'Great champion variety and mechanics.',
        date: '2024-03-13'
      }
    ],
    73: [ // Warframe
      {
        username: 'SpaceNinja',
        rating: 5,
        text: 'Incredible movement and combat systems.',
        date: '2024-03-15'
      },
      {
        username: 'GrindMaster',
        rating: 4,
        text: 'Tons of content and regular updates.',
        date: '2024-03-14'
      },
      {
        username: 'F2PGamer',
        rating: 5,
        text: 'Most generous free-to-play model.',
        date: '2024-03-13'
      }
    ],
    74: [ // Path of Exile
      {
        username: 'ARPGMaster',
        rating: 5,
        text: 'Deepest character customization in any ARPG.',
        date: '2024-03-15'
      },
      {
        username: 'BuildCreator',
        rating: 4,
        text: 'Complex but rewarding progression.',
        date: '2024-03-14'
      },
      {
        username: 'LeagueFarmer',
        rating: 5,
        text: 'Regular content updates keep it fresh.',
        date: '2024-03-13'
      }
    ],
    75: [ // Genshin Impact
      {
        username: 'GachaGamer',
        rating: 4,
        text: 'Beautiful open world with great characters.',
        date: '2024-03-15'
      },
      {
        username: 'AnimeRPG',
        rating: 5,
        text: 'High production values and regular content.',
        date: '2024-03-14'
      },
      {
        username: 'ExplorationFan',
        rating: 4,
        text: 'Engaging combat and exploration.',
        date: '2024-03-13'
      }
    ],
    76: [ // Destiny 2
      {
        username: 'Guardian',
        rating: 4,
        text: 'Best gunplay in any live service game.',
        date: '2024-03-15'
      },
      {
        username: 'RaidLeader',
        rating: 5,
        text: 'Amazing raid content and endgame activities.',
        date: '2024-03-14'
      },
      {
        username: 'LootHunter',
        rating: 4,
        text: 'Great combat with regular content updates.',
        date: '2024-03-13'
      }
    ],
    77: [ // Apex Legends
      {
        username: 'BRChampion',
        rating: 5,
        text: 'Best movement in any battle royale.',
        date: '2024-03-15'
      },
      {
        username: 'LegendMain',
        rating: 4,
        text: 'Great character abilities and teamplay.',
        date: '2024-03-14'
      },
      {
        username: 'TacticalPlayer',
        rating: 5,
        text: 'Smooth gunplay and ping system.',
        date: '2024-03-13'
      }
    ],
    78: [ // Lost Ark
      {
        username: 'MMOVeteran',
        rating: 4,
        text: 'Polished combat and diverse content.',
        date: '2024-03-15'
      },
      {
        username: 'RaidFighter',
        rating: 5,
        text: 'Great endgame raids and progression.',
        date: '2024-03-14'
      },
      {
        username: 'ClassMaster',
        rating: 4,
        text: 'Unique class design and mechanics.',
        date: '2024-03-13'
      }
    ],
    79: [ // Valorant
      {
        username: 'TacticalOps',
        rating: 5,
        text: 'Perfect blend of abilities and gunplay.',
        date: '2024-03-15'
      },
      {
        username: 'AgentPro',
        rating: 4,
        text: 'Great competitive balance and updates.',
        date: '2024-03-14'
      },
      {
        username: 'ESportsFan',
        rating: 4,
        text: 'Strong esports scene and netcode.',
        date: '2024-03-13'
      }
    ],
    80: [ // Rocket League
      {
        username: 'AerialMaster',
        rating: 5,
        text: 'Unique sports game with high skill ceiling.',
        date: '2024-03-15'
      },
      {
        username: 'SoccerCar',
        rating: 5,
        text: 'Perfect physics and competitive play.',
        date: '2024-03-14'
      },
      {
        username: 'FreestyleKing',
        rating: 4,
        text: 'Amazing mechanics and replay value.',
        date: '2024-03-13'
      }
    ],
    81: [ // Final Fantasy XIV
      {
        username: 'MMOStoryLover',
        rating: 5,
        text: 'Best story in any MMO ever made.',
        date: '2024-03-15'
      },
      {
        username: 'RaidLeader',
        rating: 5,
        text: 'Excellent job system and raid content.',
        date: '2024-03-14'
      },
      {
        username: 'CrafterGatherer',
        rating: 5,
        text: 'Deep crafting and gathering systems.',
        date: '2024-03-13'
      }
    ],
    82: [ // World of Warcraft
      {
        username: 'AzerothHero',
        rating: 4,
        text: 'Classic MMO that keeps evolving.',
        date: '2024-03-15'
      },
      {
        username: 'MythicRaider',
        rating: 5,
        text: 'Best raid design in the genre.',
        date: '2024-03-14'
      },
      {
        username: 'LoreMaster',
        rating: 4,
        text: 'Rich world with decades of content.',
        date: '2024-03-13'
      }
    ],
    83: [ // The Elder Scrolls Online
      {
        username: 'TESFan',
        rating: 4,
        text: 'Great solo and group content.',
        date: '2024-03-15'
      },
      {
        username: 'QuestHunter',
        rating: 5,
        text: 'Amazing storytelling and voice acting.',
        date: '2024-03-14'
      },
      {
        username: 'TamrielExplorer',
        rating: 4,
        text: 'Vast world with lots to discover.',
        date: '2024-03-13'
      }
    ],
    84: [ // Black Desert Online
      {
        username: 'CombatMaster',
        rating: 5,
        text: 'Best action combat in any MMO.',
        date: '2024-03-15'
      },
      {
        username: 'LifeSkiller',
        rating: 4,
        text: 'Deep life skill and trading systems.',
        date: '2024-03-14'
      },
      {
        username: 'GraphicsLover',
        rating: 4,
        text: 'Beautiful graphics and character creation.',
        date: '2024-03-13'
      }
    ],
    85: [ // Guild Wars 2
      {
        username: 'TyriaMaster',
        rating: 5,
        text: 'Most accessible MMO with great events.',
        date: '2024-03-15'
      },
      {
        username: 'WvWVeteran',
        rating: 4,
        text: 'Unique world vs world combat.',
        date: '2024-03-14'
      },
      {
        username: 'MountCollector',
        rating: 5,
        text: 'Best mount system in any MMO.',
        date: '2024-03-13'
      }
    ],
    86: [ // Star Wars: The Old Republic
      {
        username: 'SithLord',
        rating: 4,
        text: 'Great Star Wars storytelling.',
        date: '2024-03-15'
      },
      {
        username: 'JediKnight',
        rating: 4,
        text: 'Excellent voice acting and choices.',
        date: '2024-03-14'
      },
      {
        username: 'BiowareFan',
        rating: 5,
        text: 'Strong character-driven narratives.',
        date: '2024-03-13'
      }
    ],
    87: [ // New World
      {
        username: 'Settler',
        rating: 4,
        text: 'Unique crafting and territory control.',
        date: '2024-03-15'
      },
      {
        username: 'CraftingPro',
        rating: 4,
        text: 'Engaging gathering and crafting.',
        date: '2024-03-14'
      },
      {
        username: 'PvPWarrior',
        rating: 4,
        text: 'Good territory wars and combat.',
        date: '2024-03-13'
      }
    ],
    88: [ // RuneScape
      {
        username: 'SkillMaster',
        rating: 5,
        text: 'Deep progression and achievement system.',
        date: '2024-03-15'
      },
      {
        username: 'QuestLover',
        rating: 4,
        text: 'Unique and humorous quest design.',
        date: '2024-03-14'
      },
      {
        username: 'IronmanPlayer',
        rating: 4,
        text: 'Great self-sufficient gameplay mode.',
        date: '2024-03-13'
      }
    ],
    89: [ // Albion Online
      {
        username: 'PvPMaster',
        rating: 4,
        text: 'Great player-driven economy.',
        date: '2024-03-15'
      },
      {
        username: 'GuildLeader',
        rating: 4,
        text: 'Strong territory control systems.',
        date: '2024-03-14'
      },
      {
        username: 'Merchant',
        rating: 5,
        text: 'Deep market and crafting mechanics.',
        date: '2024-03-13'
      }
    ],
    90: [ // EVE Online
      {
        username: 'SpaceCaptain',
        rating: 5,
        text: 'Unmatched depth in player politics.',
        date: '2024-03-15'
      },
      {
        username: 'CorporateCEO',
        rating: 4,
        text: 'Complex economy and warfare systems.',
        date: '2024-03-14'
      },
      {
        username: 'FleetCommander',
        rating: 5,
        text: 'Best space MMO for serious players.',
        date: '2024-03-13'
      }
    ],
    91: [ // Among Us
      {
        username: 'Impostor',
        rating: 5,
        text: 'Perfect party game for social deduction.',
        date: '2024-03-15'
      },
      {
        username: 'CrewmatePro',
        rating: 4,
        text: 'Simple but engaging gameplay mechanics.',
        date: '2024-03-14'
      },
      {
        username: 'SocialGamer',
        rating: 5,
        text: 'Great for online and local play.',
        date: '2024-03-13'
      }
    ],
    92: [ // Fall Guys
      {
        username: 'BeanRunner',
        rating: 4,
        text: 'Chaotic fun with friends.',
        date: '2024-03-15'
      },
      {
        username: 'PartyPlayer',
        rating: 5,
        text: 'Perfect casual battle royale.',
        date: '2024-03-14'
      },
      {
        username: 'ObstaclePro',
        rating: 4,
        text: 'Creative courses and costumes.',
        date: '2024-03-13'
      }
    ],
    93: [ // Overcooked! 2
      {
        username: 'ChefMaster',
        rating: 5,
        text: 'Best cooperative chaos ever.',
        date: '2024-03-15'
      },
      {
        username: 'KitchenChaos',
        rating: 4,
        text: 'Great level design and mechanics.',
        date: '2024-03-14'
      },
      {
        username: 'TeamPlayer',
        rating: 5,
        text: 'Perfect party game for coordination.',
        date: '2024-03-13'
      }
    ],
    94: [ // Untitled Goose Game
      {
        username: 'GooseMaster',
        rating: 5,
        text: 'Hilarious premise with clever puzzles.',
        date: '2024-03-15'
      },
      {
        username: 'PranksterPro',
        rating: 4,
        text: 'Charming art style and music.',
        date: '2024-03-14'
      },
      {
        username: 'CasualGamer',
        rating: 5,
        text: 'Perfect blend of humor and gameplay.',
        date: '2024-03-13'
      }
    ],
    95: [ // Moving Out
      {
        username: 'MoverPro',
        rating: 4,
        text: 'Fun physics-based cooperative gameplay.',
        date: '2024-03-15'
      },
      {
        username: 'TeamLeader',
        rating: 5,
        text: 'Great level design and challenges.',
        date: '2024-03-14'
      },
      {
        username: 'CoopFan',
        rating: 4,
        text: 'Perfect party game for all ages.',
        date: '2024-03-13'
      }
    ],
    96: [ // Human: Fall Flat
      {
        username: 'PhysicsLover',
        rating: 5,
        text: 'Hilarious physics puzzles with friends.',
        date: '2024-03-15'
      },
      {
        username: 'PuzzleMaster',
        rating: 4,
        text: 'Creative level design and solutions.',
        date: '2024-03-14'
      },
      {
        username: 'CoopPlayer',
        rating: 5,
        text: 'Great mix of puzzles and humor.',
        date: '2024-03-13'
      }
    ],
    97: [ // Golf With Your Friends
      {
        username: 'GolfPro',
        rating: 4,
        text: 'Fun multiplayer mini-golf chaos.',
        date: '2024-03-15'
      },
      {
        username: 'PartyGamer',
        rating: 4,
        text: 'Great variety in course design.',
        date: '2024-03-14'
      },
      {
        username: 'CasualPlayer',
        rating: 5,
        text: 'Perfect for casual multiplayer fun.',
        date: '2024-03-13'
      }
    ],
    98: [ // Jackbox Party Pack 9
      {
        username: 'PartyHost',
        rating: 5,
        text: 'Best party games for groups.',
        date: '2024-03-15'
      },
      {
        username: 'QuizMaster',
        rating: 4,
        text: 'Great variety of games.',
        date: '2024-03-14'
      },
      {
        username: 'SocialGaming',
        rating: 5,
        text: 'Perfect for streaming and parties.',
        date: '2024-03-13'
      }
    ],
    99: [ // Goat Simulator 3
      {
        username: 'ChaosMaster',
        rating: 4,
        text: 'Even more chaotic than before.',
        date: '2024-03-15'
      },
      {
        username: 'SillyGamer',
        rating: 4,
        text: 'Pure ridiculous entertainment.',
        date: '2024-03-14'
      },
      {
        username: 'PhysicsLover',
        rating: 4,
        text: 'Great for mindless fun.',
        date: '2024-03-13'
      }
    ],
    100: [ // Unpacking
      {
        username: 'ZenGamer',
        rating: 5,
        text: 'Surprisingly emotional story through objects.',
        date: '2024-03-15'
      },
      {
        username: 'CasualPuzzler',
        rating: 5,
        text: 'Relaxing and satisfying gameplay.',
        date: '2024-03-14'
      },
      {
        username: 'StoryLover',
        rating: 5,
        text: 'Beautiful narrative through gameplay.',
        date: '2024-03-13'
      }
    ],
    101: [ // Dead Space Remake
      {
        username: 'HorrorFan',
        rating: 5,
        text: 'Perfect remake of a horror classic.',
        date: '2024-03-15'
      },
      {
        username: 'SciFiLover',
        rating: 5,
        text: 'Incredible atmosphere and tension.',
        date: '2024-03-14'
      },
      {
        username: 'SurvivalPro',
        rating: 5,
        text: 'Masterful update to the original.',
        date: '2024-03-13'
      }
    ],
    102: [ // Resident Evil Village
      {
        username: 'ZombieHunter',
        rating: 5,
        text: 'Perfect blend of horror and action.',
        date: '2024-03-15'
      },
      {
        username: 'SurvivalHorror',
        rating: 4,
        text: 'Great variety in enemies and locations.',
        date: '2024-03-14'
      },
      {
        username: 'REFanatic',
        rating: 5,
        text: 'Excellent continuation of RE7 style.',
        date: '2024-03-13'
      }
    ],
    103: [ // Amnesia: The Bunker
      {
        username: 'FearSeeker',
        rating: 4,
        text: 'Tense survival horror mechanics.',
        date: '2024-03-15'
      },
      {
        username: 'HorrorVet',
        rating: 5,
        text: 'Great atmosphere and sound design.',
        date: '2024-03-14'
      },
      {
        username: 'BunkerSurvivor',
        rating: 4,
        text: 'Innovative approach to the series.',
        date: '2024-03-13'
      }
    ],
    104: [ // Outlast 2
      {
        username: 'HorrorMaster',
        rating: 4,
        text: 'Intense chase sequences and atmosphere.',
        date: '2024-03-15'
      },
      {
        username: 'NightmareGamer',
        rating: 5,
        text: 'Terrifying rural horror experience.',
        date: '2024-03-14'
      },
      {
        username: 'CameraMan',
        rating: 4,
        text: 'Great use of night vision mechanics.',
        date: '2024-03-13'
      }
    ],
    105: [ // Layers of Fear
      {
        username: 'PsychoHorror',
        rating: 4,
        text: 'Creative psychological horror.',
        date: '2024-03-15'
      },
      {
        username: 'ArtisticFear',
        rating: 5,
        text: 'Brilliant use of art and atmosphere.',
        date: '2024-03-14'
      },
      {
        username: 'MindBender',
        rating: 4,
        text: 'Great story with psychological twists.',
        date: '2024-03-13'
      }
    ],
    106: [ // Phasmophobia
      {
        username: 'GhostHunter',
        rating: 5,
        text: 'Best cooperative ghost hunting experience.',
        date: '2024-03-15'
      },
      {
        username: 'ParanormalPro',
        rating: 4,
        text: 'Genuinely scary with friends.',
        date: '2024-03-14'
      },
      {
        username: 'VRHorror',
        rating: 5,
        text: 'Amazing in VR, constant updates.',
        date: '2024-03-13'
      }
    ],
    107: [ // The Quarry
      {
        username: 'HorrorCinema',
        rating: 4,
        text: 'Great interactive horror movie experience.',
        date: '2024-03-15'
      },
      {
        username: 'StoryChoice',
        rating: 5,
        text: 'Excellent branching narrative.',
        date: '2024-03-14'
      },
      {
        username: 'TeenHorror',
        rating: 4,
        text: 'Perfect tribute to slasher films.',
        date: '2024-03-13'
      }
    ],
    108: [ // SOMA
      {
        username: 'SciFiHorror',
        rating: 5,
        text: 'Philosophical horror masterpiece.',
        date: '2024-03-15'
      },
      {
        username: 'DeepThinker',
        rating: 5,
        text: 'Thought-provoking story and atmosphere.',
        date: '2024-03-14'
      },
      {
        username: 'UnderwaterFear',
        rating: 4,
        text: 'Incredible narrative and world-building.',
        date: '2024-03-13'
      }
    ],
    109: [ // Little Nightmares II
      {
        username: 'CreepyGamer',
        rating: 5,
        text: 'Atmospheric horror platforming.',
        date: '2024-03-15'
      },
      {
        username: 'ArtStyle',
        rating: 4,
        text: 'Beautiful and disturbing visuals.',
        date: '2024-03-14'
      },
      {
        username: 'PuzzleHorror',
        rating: 5,
        text: 'Excellent environmental storytelling.',
        date: '2024-03-13'
      }
    ],
    110: [ // Alien: Isolation
      {
        username: 'XenoHunter',
        rating: 5,
        text: 'Most terrifying AI in horror gaming.',
        date: '2024-03-15'
      },
      {
        username: 'SpaceHorror',
        rating: 5,
        text: 'Perfect Alien atmosphere.',
        date: '2024-03-14'
      },
      {
        username: 'SurvivalMaster',
        rating: 5,
        text: 'Incredible tension and stealth.',
        date: '2024-03-13'
      }
    ],
    111: [ // Portal 2
      {
        username: 'PortalMaster',
        rating: 5,
        text: 'Perfect puzzle design and humor.',
        date: '2024-03-15'
      },
      {
        username: 'CoopPuzzler',
        rating: 5,
        text: 'Brilliant cooperative campaign.',
        date: '2024-03-14'
      },
      {
        username: 'PhysicsLover',
        rating: 5,
        text: 'Innovative mechanics and storytelling.',
        date: '2024-03-13'
      }
    ],
    112: [ // Baba Is You
      {
        username: 'PuzzleGenius',
        rating: 5,
        text: 'Most innovative puzzle game ever.',
        date: '2024-03-15'
      },
      {
        username: 'LogicMaster',
        rating: 5,
        text: 'Brilliant rule-breaking mechanics.',
        date: '2024-03-14'
      },
      {
        username: 'MindBender',
        rating: 5,
        text: 'Incredibly creative puzzle design.',
        date: '2024-03-13'
      }
    ],
    113: [ // The Witness
      {
        username: 'PuzzleExplorer',
        rating: 5,
        text: 'Beautiful world with clever puzzles.',
        date: '2024-03-15'
      },
      {
        username: 'PatternMaster',
        rating: 4,
        text: 'Deep and rewarding puzzle mechanics.',
        date: '2024-03-14'
      },
      {
        username: 'IslandSolver',
        rating: 5,
        text: 'Brilliant environmental puzzles.',
        date: '2024-03-13'
      }
    ],
    114: [ // Tetris Effect: Connected
      {
        username: 'TetrisMaster',
        rating: 5,
        text: 'Beautiful reimagining of a classic.',
        date: '2024-03-15'
      },
      {
        username: 'RhythmGamer',
        rating: 5,
        text: 'Amazing audiovisual experience.',
        date: '2024-03-14'
      },
      {
        username: 'PuzzleVet',
        rating: 5,
        text: 'Perfect blend of visuals and gameplay.',
        date: '2024-03-13'
      }
    ],
    115: [ // Return to Monkey Island
      {
        username: 'AdventureFan',
        rating: 5,
        text: 'Perfect return to the series.',
        date: '2024-03-15'
      },
      {
        username: 'PointAndClick',
        rating: 4,
        text: 'Great humor and puzzles.',
        date: '2024-03-14'
      },
      {
        username: 'PirateLover',
        rating: 5,
        text: 'Nostalgic yet fresh adventure.',
        date: '2024-03-13'
      }
    ],
    116: [ // Superliminal
      {
        username: 'PerspectivePro',
        rating: 5,
        text: 'Mind-bending perspective puzzles.',
        date: '2024-03-15'
      },
      {
        username: 'OpticalMaster',
        rating: 4,
        text: 'Creative use of perception mechanics.',
        date: '2024-03-14'
      },
      {
        username: 'PuzzleInnovator',
        rating: 4,
        text: 'Unique take on spatial puzzles.',
        date: '2024-03-13'
      }
    ],
    117: [ // The Talos Principle
      {
        username: 'PhilosoPuzzle',
        rating: 5,
        text: 'Deep philosophical puzzler.',
        date: '2024-03-15'
      },
      {
        username: 'LogicMaster',
        rating: 5,
        text: 'Excellent puzzle design and story.',
        date: '2024-03-14'
      },
      {
        username: 'MindBender',
        rating: 4,
        text: 'Thought-provoking challenges.',
        date: '2024-03-13'
      }
    ],
    118: [ // We Were Here Forever
      {
        username: 'CoopPuzzler',
        rating: 4,
        text: 'Great cooperative puzzle solving.',
        date: '2024-03-15'
      },
      {
        username: 'TeamPlayer',
        rating: 5,
        text: 'Perfect for duo problem solving.',
        date: '2024-03-14'
      },
      {
        username: 'EscapeArtist',
        rating: 4,
        text: 'Challenging communication puzzles.',
        date: '2024-03-13'
      }
    ],
    119: [ // Escape Simulator
      {
        username: 'EscapeRoomPro',
        rating: 4,
        text: 'Great virtual escape room experience.',
        date: '2024-03-15'
      },
      {
        username: 'PuzzleMaster',
        rating: 5,
        text: 'Excellent variety of rooms.',
        date: '2024-03-14'
      },
      {
        username: 'RoomBreaker',
        rating: 4,
        text: 'Fun solo or cooperative play.',
        date: '2024-03-13'
      }
    ],
    120: [ // A Little to the Left
      {
        username: 'OrganizerPro',
        rating: 4,
        text: 'Satisfying organization puzzles.',
        date: '2024-03-15'
      },
      {
        username: 'ZenPuzzler',
        rating: 5,
        text: 'Relaxing and clever design.',
        date: '2024-03-14'
      },
      {
        username: 'TidyMaster',
        rating: 4,
        text: 'Perfect for quick puzzle sessions.',
        date: '2024-03-13'
      }
    ],
    121: [ // Street Fighter 6
      {
        username: 'FightingMaster',
        rating: 5,
        text: 'Best Street Fighter ever made.',
        date: '2024-03-15'
      },
      {
        username: 'ComboKing',
        rating: 5,
        text: 'Perfect balance of accessibility and depth.',
        date: '2024-03-14'
      },
      {
        username: 'FGCVeteran',
        rating: 4,
        text: 'Great netcode and feature set.',
        date: '2024-03-13'
      }
    ],
    122: [ // Mortal Kombat 1
      {
        username: 'KombatMaster',
        rating: 5,
        text: 'Fresh take on classic franchise.',
        date: '2024-03-15'
      },
      {
        username: 'FatalityPro',
        rating: 4,
        text: 'Amazing graphics and brutal combat.',
        date: '2024-03-14'
      },
      {
        username: 'StoryFighter',
        rating: 5,
        text: 'Great story mode and presentation.',
        date: '2024-03-13'
      }
    ],
    123: [ // Tekken 8
      {
        username: 'IronFist',
        rating: 5,
        text: 'Best looking fighting game ever.',
        date: '2024-03-15'
      },
      {
        username: 'MishimaPro',
        rating: 5,
        text: 'Incredible combat system and graphics.',
        date: '2024-03-14'
      },
      {
        username: 'FGCLegend',
        rating: 4,
        text: 'Solid evolution of Tekken formula.',
        date: '2024-03-13'
      }
    ],
    124: [ // Guilty Gear Strive
      {
        username: 'AirDasher',
        rating: 5,
        text: 'Beautiful anime fighter with depth.',
        date: '2024-03-15'
      },
      {
        username: 'RomanCancel',
        rating: 4,
        text: 'Amazing netcode and visuals.',
        date: '2024-03-14'
      },
      {
        username: 'ComboMaster',
        rating: 5,
        text: 'Best fighting game presentation.',
        date: '2024-03-13'
      }
    ],
    125: [ // MultiVersus
      {
        username: 'PlatformFighter',
        rating: 4,
        text: 'Fun platform fighter with great roster.',
        date: '2024-03-15'
      },
      {
        username: 'WBFanatic',
        rating: 4,
        text: 'Good character interactions.',
        date: '2024-03-14'
      },
      {
        username: 'SmashPro',
        rating: 4,
        text: 'Solid platform fighting mechanics.',
        date: '2024-03-13'
      }
    ],
    126: [ // Dragon Ball FighterZ
      {
        username: 'SaiyanPro',
        rating: 5,
        text: 'Perfect Dragon Ball fighting game.',
        date: '2024-03-15'
      },
      {
        username: 'AnimeFighter',
        rating: 4,
        text: 'Amazing visuals and combat system.',
        date: '2024-03-14'
      },
      {
        username: 'ComboKing',
        rating: 5,
        text: 'Best anime fighter adaptation.',
        date: '2024-03-13'
      }
    ],
    127: [ // The King of Fighters XV
      {
        username: 'SNKVeteran',
        rating: 4,
        text: 'Solid evolution of KOF series.',
        date: '2024-03-15'
      },
      {
        username: 'TeamFighter',
        rating: 5,
        text: 'Great team battle mechanics.',
        date: '2024-03-14'
      },
      {
        username: 'FGCOldSchool',
        rating: 4,
        text: 'Classic gameplay feel preserved.',
        date: '2024-03-13'
      }
    ],
    128: [ // Nickelodeon All-Star Brawl 2
      {
        username: 'NickFan',
        rating: 4,
        text: 'Improved sequel with better features.',
        date: '2024-03-15'
      },
      {
        username: 'CartoonFighter',
        rating: 4,
        text: 'Fun roster and improved gameplay.',
        date: '2024-03-14'
      },
      {
        username: 'PlatformPro',
        rating: 4,
        text: 'Good casual fighting game.',
        date: '2024-03-13'
      }
    ],
    129: [ // Brawlhalla
      {
        username: 'F2PFighter',
        rating: 4,
        text: 'Great free platform fighter.',
        date: '2024-03-15'
      },
      {
        username: 'BrawlerPro',
        rating: 4,
        text: 'Good competitive scene and support.',
        date: '2024-03-14'
      },
      {
        username: 'PlatformMaster',
        rating: 5,
        text: 'Accessible but deep gameplay.',
        date: '2024-03-13'
      }
    ],
    130: [ // Skullgirls 2nd Encore
      {
        username: 'FGCVeteran',
        rating: 5,
        text: 'Best indie fighting game ever.',
        date: '2024-03-15'
      },
      {
        username: 'ComboMaster',
        rating: 5,
        text: 'Amazing animation and mechanics.',
        date: '2024-03-14'
      },
      {
        username: 'ArtLover',
        rating: 4,
        text: 'Beautiful hand-drawn visuals.',
        date: '2024-03-13'
      }
    ],
    131: [ // PUBG: BATTLEGROUNDS
      {
        username: 'BattleRoyaleVet',
        rating: 4,
        text: 'Original BR with tactical gameplay.',
        date: '2024-03-15'
      },
      {
        username: 'TacticalShooter',
        rating: 4,
        text: 'Still the most realistic BR.',
        date: '2024-03-14'
      },
      {
        username: 'SquadLeader',
        rating: 4,
        text: 'Great team-based gameplay.',
        date: '2024-03-13'
      }
    ],
    132: [ // Fortnite (Battle Royale)
      {
        username: 'BuilderPro',
        rating: 5,
        text: 'Constant updates keep it fresh.',
        date: '2024-03-15'
      },
      {
        username: 'BattlePassKing',
        rating: 4,
        text: 'Great crossover events.',
        date: '2024-03-14'
      },
      {
        username: 'BoxFighter',
        rating: 5,
        text: 'Unique building mechanics.',
        date: '2024-03-13'
      }
    ],
    133: [ // Call of Duty: Warzone
      {
        username: 'WarzoneVet',
        rating: 4,
        text: 'Solid gunplay and movement.',
        date: '2024-03-15'
      },
      {
        username: 'LoadoutMaster',
        rating: 4,
        text: 'Great weapon customization.',
        date: '2024-03-14'
      },
      {
        username: 'GulagKing',
        rating: 4,
        text: 'Fast-paced BR action.',
        date: '2024-03-13'
      }
    ],
    134: [ // Apex Legends (Battle Royale)
      {
        username: 'MovementKing',
        rating: 5,
        text: 'Best movement in any BR.',
        date: '2024-03-15'
      },
      {
        username: 'LegendMaster',
        rating: 5,
        text: 'Great character abilities.',
        date: '2024-03-14'
      },
      {
        username: 'TeamPlayer',
        rating: 4,
        text: 'Excellent ping system.',
        date: '2024-03-13'
      }
    ],
    135: [ // Fall Guys (Battle Royale)
      {
        username: 'BeanMaster',
        rating: 4,
        text: 'Fun take on battle royale.',
        date: '2024-03-15'
      },
      {
        username: 'PartyGamer',
        rating: 4,
        text: 'Great casual BR experience.',
        date: '2024-03-14'
      },
      {
        username: 'ObstaclePro',
        rating: 5,
        text: 'Perfect party game.',
        date: '2024-03-13'
      }
    ],
    136: [ // Naraka: Bladepoint
      {
        username: 'MartialArtist',
        rating: 4,
        text: 'Unique melee-focused BR.',
        date: '2024-03-15'
      },
      {
        username: 'CombatPro',
        rating: 4,
        text: 'Great combat mechanics.',
        date: '2024-03-14'
      },
      {
        username: 'AsianMythology',
        rating: 4,
        text: 'Beautiful art and setting.',
        date: '2024-03-13'
      }
    ],
    137: [ // Vampire: The Masquerade - Blood Hunt
      {
        username: 'VampireHunter',
        rating: 4,
        text: 'Unique vampire BR concept.',
        date: '2024-03-15'
      },
      {
        username: 'NightStalker',
        rating: 4,
        text: 'Good vertical gameplay.',
        date: '2024-03-14'
      },
      {
        username: 'GothicGamer',
        rating: 3,
        text: 'Interesting but niche BR.',
        date: '2024-03-13'
      }
    ],
    138: [ // Super People
      {
        username: 'SuperSoldier',
        rating: 4,
        text: 'Fresh take on BR formula.',
        date: '2024-03-15'
      },
      {
        username: 'ClassMaster',
        rating: 4,
        text: 'Interesting class system.',
        date: '2024-03-14'
      },
      {
        username: 'BRVeteran',
        rating: 4,
        text: 'Good progression mechanics.',
        date: '2024-03-13'
      }
    ],
    139: [ // Rumbleverse
      {
        username: 'WrestlingFan',
        rating: 4,
        text: 'Fun wrestling-themed BR.',
        date: '2024-03-15'
      },
      {
        username: 'BrawlerPro',
        rating: 3,
        text: 'Unique melee combat BR.',
        date: '2024-03-14'
      },
      {
        username: 'FightingGamer',
        rating: 4,
        text: 'Creative BR concept.',
        date: '2024-03-13'
      }
    ],
    140: [ // Spellbreak
      {
        username: 'MagicMaster',
        rating: 4,
        text: 'Unique magic combat system.',
        date: '2024-03-15'
      },
      {
        username: 'ElementalPro',
        rating: 4,
        text: 'Creative spell combinations.',
        date: '2024-03-14'
      },
      {
        username: 'BattleMage',
        rating: 4,
        text: 'Fresh magical BR experience.',
        date: '2024-03-13'
      }
    ],
    141: [ // Steins;Gate
      {
        username: 'VNLover',
        rating: 5,
        text: 'Masterpiece of visual novel storytelling.',
        date: '2024-03-15'
      },
      {
        username: 'SciFiFan',
        rating: 5,
        text: 'Complex time travel narrative.',
        date: '2024-03-14'
      },
      {
        username: 'StoryMaster',
        rating: 5,
        text: 'Emotional and thought-provoking.',
        date: '2024-03-13'
      }
    ],
    142: [ // Danganronpa V3
      {
        username: 'MysteryFan',
        rating: 5,
        text: 'Best in the series.',
        date: '2024-03-15'
      },
      {
        username: 'VisualNovelPro',
        rating: 4,
        text: 'Great mysteries and twists.',
        date: '2024-03-14'
      },
      {
        username: 'DetectiveMind',
        rating: 5,
        text: 'Excellent character development.',
        date: '2024-03-13'
      }
    ],
    143: [ // VA-11 Hall-A
      {
        username: 'CyberpunkFan',
        rating: 5,
        text: 'Unique bartending narrative.',
        date: '2024-03-15'
      },
      {
        username: 'VisualNovelLover',
        rating: 4,
        text: 'Great character interactions.',
        date: '2024-03-14'
      },
      {
        username: 'StoryExplorer',
        rating: 5,
        text: 'Atmospheric and engaging.',
        date: '2024-03-13'
      }
    ],
    144: [ // Phoenix Wright: Ace Attorney Trilogy
      {
        username: 'LawyerPro',
        rating: 5,
        text: 'Classic courtroom drama.',
        date: '2024-03-15'
      },
      {
        username: 'MysteryMaster',
        rating: 5,
        text: 'Great cases and characters.',
        date: '2024-03-14'
      },
      {
        username: 'ObjectionKing',
        rating: 5,
        text: 'Perfect trilogy collection.',
        date: '2024-03-13'
      }
    ],
    145: [ // Doki Doki Literature Club Plus
      {
        username: 'MetaGamer',
        rating: 5,
        text: 'Subversive masterpiece.',
        date: '2024-03-15'
      },
      {
        username: 'PsychHorror',
        rating: 5,
        text: 'Brilliant psychological narrative.',
        date: '2024-03-14'
      },
      {
        username: 'VNExplorer',
        rating: 5,
        text: 'Unique and unforgettable.',
        date: '2024-03-13'
      }
    ],
    146: [ // The House in Fata Morgana
      {
        username: 'GothicRomance',
        rating: 5,
        text: 'Masterful dark romance story.',
        date: '2024-03-15'
      },
      {
        username: 'VNConnoisseur',
        rating: 5,
        text: 'Beautiful art and music.',
        date: '2024-03-14'
      },
      {
        username: 'StoryLover',
        rating: 5,
        text: 'Deep and emotional narrative.',
        date: '2024-03-13'
      }
    ],
    147: [ // 13 Sentinels: Aegis Rim
      {
        username: 'SciFiLover',
        rating: 5,
        text: 'Complex sci-fi masterpiece.',
        date: '2024-03-15'
      },
      {
        username: 'StoryWeaver',
        rating: 5,
        text: 'Brilliant narrative structure.',
        date: '2024-03-14'
      },
      {
        username: 'MechaPilot',
        rating: 4,
        text: 'Unique blend of genres.',
        date: '2024-03-13'
      }
    ],
    148: [ // AI: The Somnium Files
      {
        username: 'DetectivePro',
        rating: 5,
        text: 'Engaging mystery with sci-fi elements.',
        date: '2024-03-15'
      },
      {
        username: 'PuzzleMaster',
        rating: 4,
        text: 'Great dream world mechanics.',
        date: '2024-03-14'
      },
      {
        username: 'StorySeeker',
        rating: 5,
        text: 'Complex but rewarding plot.',
        date: '2024-03-13'
      }
    ],
    149: [ // Clannad
      {
        username: 'VNClassic',
        rating: 5,
        text: 'Emotional storytelling masterpiece.',
        date: '2024-03-15'
      },
      {
        username: 'SliceOfLife',
        rating: 5,
        text: 'Beautiful character development.',
        date: '2024-03-14'
      },
      {
        username: 'EmotionalGamer',
        rating: 5,
        text: 'Touching and profound story.',
        date: '2024-03-13'
      }
    ],
    150: [ // Zero Escape: The Nonary Games
      {
        username: 'EscapeArtist',
        rating: 5,
        text: 'Brilliant puzzle-narrative hybrid.',
        date: '2024-03-15'
      },
      {
        username: 'MysteryBuff',
        rating: 5,
        text: 'Complex but satisfying story.',
        date: '2024-03-14'
      },
      {
        username: 'PuzzleSolver',
        rating: 4,
        text: 'Great escape room mechanics.',
        date: '2024-03-13'
      }
    ]
  };

  reviews: Review[] = [];

  constructor(private route: ActivatedRoute) {}

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
    });
  }

  submitReview() {
    if (this.newReview.rating && this.newReview.text.trim()) {
      const newReviewObj: Review = {
        username: 'You',
        rating: this.newReview.rating,
        text: this.newReview.text.trim(),
        date: new Date().toISOString().split('T')[0]
      };
      
      this.reviews.unshift(newReviewObj);
      if (this.game && this.game.id) {
        if (!this.gameReviews[this.game.id]) {
          this.gameReviews[this.game.id] = [];
        }
        this.gameReviews[this.game.id].unshift(newReviewObj);
      }
      
      this.showReviewForm = false;
      this.newReview = { rating: 0, text: '' };
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