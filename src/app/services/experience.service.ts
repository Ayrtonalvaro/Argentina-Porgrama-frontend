import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Experience, ExperienceDto } from 'src/model/Experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  apiServerUrl = environment.apiBaseUrl


  constructor(private http: HttpClient) { }


  public getExperiences ():Observable<Experience[]>{
    return this.http.get<Experience[]>(`${this.apiServerUrl}/experience/all`)
  }

  public addExperience (experience: ExperienceDto): Observable<ExperienceDto> {
    return this.http.post<ExperienceDto>(`${this.apiServerUrl}/experience/create`, experience)
  }

  public updateExperience( id: number, education: ExperienceDto):Observable<ExperienceDto>{
    return this.http.put<ExperienceDto>(`${this.apiServerUrl}/experience/update/${id}`, education)
  }

  public deleteExperience(id:number): Observable<any>{
    return this.http.delete<any>(`${this.apiServerUrl}/experience/delete/${id}`)
  }


}
