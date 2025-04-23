import { Routes } from '@angular/router';
import { GameSearchComponent } from './game-search/game-search.component';
import { GameReviewsComponent } from './game-reviews/game-reviews.component';
import { GameNewsComponent } from './game-news/game-news.component';

export const routes: Routes = [
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'games', component: GameReviewsComponent },
  { path: 'game/:id', component: GameReviewsComponent }, // Changed from game-reviews/:id
  { path: 'news', component: GameNewsComponent }
];