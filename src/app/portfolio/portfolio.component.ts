import { Component, OnInit } from '@angular/core';
import { style, animate, trigger, transition,state } from '@angular/animations';
import { TokenService } from '../services/token.service';

const enterTransition = trigger('enterState', [
  state('void',style({
    opacity:0
  })),
  transition(':enter',[
    animate(1200,style({
      opacity:1
    }))
  ])
]);


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  animations: [enterTransition]
})
export class PortfolioComponent implements OnInit {

  constructor(private tokenService: TokenService) { }

  isLogged = false;
  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  toLink(linkId:any) {
    console.log(linkId)
    document.getElementById(linkId)?.scrollIntoView({ behavior: 'smooth'});
  }

}
