import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show-button',
  templateUrl: './show-button.component.html',
  styleUrls: ['./show-button.component.css']
})
export class ShowButtonComponent implements OnInit {

  visible: boolean = false;
  @Output() open: EventEmitter<any> = new EventEmitter()
  @Output() close: EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.visible = !this.visible;
    if (this.visible) {
      this.open.emit(this.visible);
    } else {
      this.close.emit(this.visible);
    }
  }

}
