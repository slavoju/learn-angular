import { Component } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-world';

  tweet = {
      body: 'Here is the body of a tweet...',
      isLiked: false,
      likesCount: 0
  }

  onClick(event) {
    this.tweet.isLiked = event.isActive;
    this.tweet.likesCount = event.likesCount;
  }
}
