import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor() { }

  authors = ['Jan Nowak', 'Zbigniew Ziobro', 'Roman Giertych'];

  getAuthors() {
    return this.authors;
  }
}
