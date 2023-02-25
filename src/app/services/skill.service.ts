import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Education } from 'src/model/Education';
import { HttpClient } from '@angular/common/http';
import { Skill, SkillDto } from 'src/model/Skill';


@Injectable({
  providedIn: 'root'
})
export class SkillService {
   apiServerUrl = environment.apiBaseUrl
  constructor(private http: HttpClient) { }

  public getSkills():Observable<Skill[]>{
    return this.http.get<Skill[]>(`${this.apiServerUrl}/skill/all`)
  }

  public addSKill(skill: SkillDto):Observable<SkillDto> {
    return this.http.post<SkillDto>(`${this.apiServerUrl}/skill/create`,skill)
  }

  public updateSkill(skill: SkillDto, id: number):Observable<SkillDto> {
    return this.http.put<SkillDto>(`${this.apiServerUrl}/skill/update/${id}`,skill)
  }

  public deleteSkill(id: number):Observable<any> {
    return this.http.delete<any>(`${this.apiServerUrl}/skill/delete/${id}`)
  }


}
