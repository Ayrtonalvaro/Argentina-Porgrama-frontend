import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {


  @Input() id: number | undefined
  @Input() name:string | undefined
  @Input() title: string | undefined
  @Input() description: string | undefined
  @Input() time: string | undefined

  @Output()
  idCard = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  idCardToDelete(idCardToDelete: number | undefined) {
    this.idCard.emit(idCardToDelete)
  }

}
