import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from 'src/model/jwt-dto';
import { LoginUsuario } from 'src/model/Login-usuario';
import { NuevoUsuario } from 'src/model/Nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiServerUrl = environment.apiBaseUrl

  authURL: string = this.apiServerUrl + '/auth/';

  constructor(private http: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.http.post<any>(`${this.authURL}nuevo`, nuevoUsuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.http.post<JwtDto>(`${this.authURL}login`, loginUsuario);
  }

  
}
