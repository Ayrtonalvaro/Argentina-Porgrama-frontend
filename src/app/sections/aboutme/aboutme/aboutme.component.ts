import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/model/user';
import { animation, style, animate, trigger, transition, useAnimation,state } from '@angular/animations';


@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
  
})
export class AboutmeComponent implements OnInit {

  public user: User | undefined
  public editUser: User | undefined

  constructor(private userService: UserService) { }

  name= 'Ayrton alvaro'
  profession = "Web developer"
  description = "Bienvenidos a mi porfolio, soy un programador jr front end con algunos conocimientos sobre el back end, siempre estoy intentando aprender y descubrir nuevas tecnologias para implemnetar a los proyectos que realizo.Soy de Argentina de la provincia de Buenos Aires tengo 26 años te invito a saber mas de mi en las siguientes secciones.En mis tiempos libres soy guitarrista😁"
  gitHub= "https://github.com/Ayrtonalvaro"
  linkedIn= "https://www.linkedin.com/in/ayrton-alvaro-320a9424a/"
  instagram= "https://www.instagram.com/ayrtonalvaro/?hl=es-la"
  twitter= "https://twitter.com/ayrtonalvaro"

  ngOnInit(): void {
    this.getUser();
  }

  public getUser():void{
    this.userService.getUser().subscribe({
      next: (response: User) => {
        this.user = response
      },
      error:(error: HttpErrorResponse) => {
        console.error(error.message)
      }
    })
  }


}
