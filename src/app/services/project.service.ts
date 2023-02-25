import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Project, ProjectDto } from 'src/model/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { }

   apiServerUrl = environment.apiBaseUrl

  getProjects():Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiServerUrl}/project/all`)
  }

  addProject(project: ProjectDto):Observable<ProjectDto> {
    return this.http.post<ProjectDto>(`${this.apiServerUrl}/project/create`, project)
  }

  updateProject(id: number, project: ProjectDto):Observable<Project> {
    return this.http.put<Project>(`${this.apiServerUrl}/project/update/${id}`, project)
  }

  deleteProject(id: number):Observable<any> {
    return this.http.delete(`${this.apiServerUrl}/project/delete/${id}`)
  }
}
