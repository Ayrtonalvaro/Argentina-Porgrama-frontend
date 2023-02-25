import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { style, animate, trigger, transition,state } from '@angular/animations';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { LoginUsuario } from 'src/model/Login-usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('enterState', [
      state('void',style({
        opacity:0
      })),
      transition(':enter',[
        animate(1200,style({
          opacity:1
        }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password: string = '';
  roles: string[] = [];
  errMsj!: string
  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = true;
      this.roles = this.tokenService.getAuthorities();
      this.nombreUsuario = this.tokenService.getUsername();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUsuario).subscribe( data => {
      this.tokenService.setToken(data.token);
      this.tokenService.setUsername(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
      this.router.navigate(['']);
    }, err => {
      this.isLogged = false;
      this.isLoginFail = true;
      this.errMsj = err.error.mensaje;
      console.log(this.errMsj);
    })
  }

}
