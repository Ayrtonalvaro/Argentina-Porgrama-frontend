import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project, ProjectDto } from 'src/model/Project';

@Component({
  selector: 'app-projects-section',
  templateUrl: './projects-section.component.html',
  styleUrls: ['./projects-section.component.css']
})
export class ProjectsSectionComponent implements OnInit {

  projects: Project[] = []
  stateModal: boolean = true
  @Input() isLogged: boolean = false
  constructor(private projectService: ProjectService) { }
  ngOnInit(): void {
    this.getProjects()
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe({
      next:(response: Project[]) => {
        this.projects = response
      },
      error:(error: HttpErrorResponse) => {
        console.log(error)
      }
    })
  }

  addProject(data:any): void {
    const newProject: ProjectDto = {
      title: data.title,
      linkGithub: data.linkGithub,
      linkDeploy: data.linkDeploy,
      urlImg: data. urlImg
    }
    this.projectService.addProject(newProject).subscribe( data => {
      console.log("Proyecto agregado", data)
      this.getProjects()
    })
    this.handleModal()
  }

  deleteProject(id: number): void {
    this.projectService.deleteProject(id).subscribe( data => {
      console.log("Proyecto eliminado", data)
      this.getProjects()
    })
  }

  idEdit: number = 0
  setIdEdit(id: number): void {
    console.log(id)
    this.idEdit = id
  }

  editProject(data: any): void {
    const newProject: ProjectDto = {
      title: data.title,
      linkGithub: data.linkGithub,
      linkDeploy: data.linkDeploy,
      urlImg: data. urlImg
    }
    this.projectService.updateProject(this.idEdit, newProject).subscribe( data => {
      console.log("Proyecto editado", data)
      this.getProjects()
    })

    this.handleModal()
  }

  state: boolean = false
  showSection(curretState: boolean) {
    this.state = curretState
    console.log(this.state)
  }

  handleModal() {
    this.stateModal = !this.stateModal
  }

  closeModal(newState: boolean) {
    this.stateModal = newState
  }




}
