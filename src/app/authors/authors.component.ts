import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  public authors : any;

  constructor(authorsService: AuthorsService) {  
    this.authors = authorsService.getAuthors();
  }

  ngOnInit() {
  }
}
