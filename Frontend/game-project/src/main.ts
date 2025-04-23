import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { DiscussionComponent } from './app/discussion/discussion.component';
import { NavComponent } from './app/nav/nav.component';
import { GameNewsComponent } from './app/game-news/game-news.component';
import { GameReviewsComponent } from './app/game-reviews/game-reviews.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  template: `
    <app-nav></app-nav>
    <router-outlet></router-outlet>
  `
})
export class App {
  name = 'GameTalk';
}

const routes = [
  { path: '', component: HomeComponent },
  { path: 'discussion/:id', component: DiscussionComponent },
  { path: 'news', component: GameNewsComponent },
  { path: 'game/:id/reviews', component: GameReviewsComponent }, // Changed from 'reviews' to 'game/:id/reviews'
];

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});