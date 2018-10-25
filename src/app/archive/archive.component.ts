import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  year: any;
  month: any;

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        this.year = params.get('year');
        this.month = params.get('month');
      });
  }

}
