import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education, EducationDto } from 'src/model/Education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiServerUrl = environment.apiBaseUrl


  constructor(private http: HttpClient) { }

  public getEducations():Observable<Education[]>{
    return this.http.get<Education[]>(`${this.apiServerUrl}/education/all`)
  }

  public addEducation(education: EducationDto):Observable<EducationDto>{
    return this.http.post<EducationDto>(`${this.apiServerUrl}/education/create`, education)
  }

  public updateEducation( id: number, education: EducationDto):Observable<Education>{
    return this.http.put<Education>(`${this.apiServerUrl}/education/update/${id}`, education)
  }

  public deleteEducation(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/education/delete/${id}`)
  }
}
