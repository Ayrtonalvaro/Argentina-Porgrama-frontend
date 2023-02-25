import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid-icons-links',
  templateUrl: './grid-icons-links.component.html',
  styleUrls: ['./grid-icons-links.component.css']
})
export class GridIconsLinksComponent implements OnInit {

  @Input() linkGit: string = ''
  @Input() linkLinkedIn: string = ''
  @Input() linkInstagram: string = ''


  constructor() { }

  ngOnInit(): void {
  }

}
