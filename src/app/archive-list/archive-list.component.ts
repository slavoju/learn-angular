import { Component } from '@angular/core';

@Component({
  selector: 'archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.css']
})
export class ArchiveListComponent {

    archiveLinks = [{'year': '2017', 'month':'1'},{'year': '2017', 'month':'2'},{'year': '2017', 'month':'3'}];
}
