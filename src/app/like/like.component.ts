import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor() { }

  @Input()  isActive : boolean;
  @Input()  likesCount: number;
  @Output()  change = new EventEmitter();

  onClicked()
  {
    this.isActive = !this.isActive;
    if(this.isActive) {
      this.likesCount++;
    }
    else {
      this.likesCount--;
    }

    this.change.emit({ isActive: this.isActive, likesCount: this.likesCount});
  }

  ngOnInit() {
  }
}
