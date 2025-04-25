import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-discussion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})

export class DiscussionComponent implements OnInit {
  messages: any[] = [];
  newMessage = '';
  gameId: string | null = null;
  currentGame: any = null;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.gameId = params.get('id');
      if (this.gameId !== null) {
        this.loadGameDetails(this.gameId);
        this.loadMessages(this.gameId);
      } else {
        console.error('Game ID is null');
      }
    });
  }

  loadGameDetails(gameId: string): void {
    this.apiService.getGame(Number(gameId)).subscribe({
      next: (game) => {
        this.currentGame = {
          title: game.title,
          activePlayers: game.active_players
        };
      },
      error: (error) => {
        console.error('Error loading game:', error);
      }
    });
  }

  loadMessages(gameId: string): void {
    // Assuming you have a discussion ID or are using the first discussion
    // You might need to adjust this based on your routing
    this.apiService.getDiscussionMessages(Number(gameId)).subscribe({
      next: (messages) => {
        this.messages = messages.map((msg: any) => ({
          user: msg.user.username,
          text: msg.text,
          time: new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          sent: msg.user.username === 'current_user' // You'll need to compare with actual logged in user
        }));
      },
      error: (error) => {
        console.error('Error loading messages:', error);
      }
    });
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      this.apiService.sendMessage(Number(this.gameId), this.newMessage.trim()).subscribe({
        next: (message) => {
          this.messages.push({
            user: 'You',
            text: message.text,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            sent: true
          });
          this.newMessage = '';
        },
        error: (error) => {
          console.error('Error sending message:', error);
        }
      });
    }
  }
}
