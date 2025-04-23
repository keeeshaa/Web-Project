import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-discussion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './discussion.component.html',
  styleUrls: ['./discussion.component.css']
})
export class DiscussionComponent implements OnInit {
  messages = [
    { user: 'GameMaster', text: 'Welcome to the discussion! Please keep the conversation friendly and constructive.', time: '10:00 AM', sent: false },
    { user: 'Player123', text: 'Hey everyone! Anyone want to team up later?', time: '10:01 AM', sent: false },
  ];
  newMessage = '';
  gameId: string | null = null;
  currentGame: any = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.gameId = params.get('id');
      // In a real app, you would fetch the game details from a service
      this.currentGame = {
        title: 'Game Discussion',
        activePlayers: 42
      };
    });
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        user: 'You',
        text: this.newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        sent: true
      });
      this.newMessage = '';
    }
  }
}