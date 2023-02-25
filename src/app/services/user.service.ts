import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { User } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   apiServerUrl = environment.apiBaseUrl

  constructor(private http: HttpClient) { }

  public getUser ():Observable<User>{
    return this.http.get<User>(`${this.apiServerUrl}/user/id/1`)
  }

  public updateUser(user: User):Observable<User>{
    return this.http.put<User>(`${this.apiServerUrl}/user/update`,user)
  }


}
