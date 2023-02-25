import { Component, OnInit,Output,  EventEmitter } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged = false;

  @Output() linkId = new EventEmitter<string>();

  constructor(private tokenService: TokenService) {   }

  navbarLinks: string[] = [ 'Sobre mí' ,'Skills', 'Proyectos' , 'Estudios' , 'Experiencias' ]

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onLogOut():void {
    this.tokenService.logOut();
    window.location.reload()
  }

  toLink(linkId:any) {
    document.getElementById(linkId)?.scrollIntoView({ behavior: 'smooth'});
  }


}
