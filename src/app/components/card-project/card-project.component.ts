import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project, ProjectDto } from 'src/model/Project';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.css']
})
export class CardProjectComponent implements OnInit {

  constructor() { }

  @Input() project: Project = {
    id: 0,
    title: '',
    linkGithub: '',
    linkDeploy: '',
    urlImg: '',
  }
  @Output() idEdit = new EventEmitter<number>()
  @Output() idDelete = new EventEmitter<number>()
  @Output() dataModal = new EventEmitter<boolean>()
  @Output() dataEditProject = new EventEmitter<ProjectDto>()
  @Input() isLogged: boolean = false

  ngOnInit(): void {
  }

  stateModal: boolean = false;
  showModal() {
    this.stateModal = !this.stateModal;
    console.log(this.project.id)
    this.projectEdit(this.project.id)
  }

  closeModal(newState:boolean) {
    console.log(newState)

  }

  projectModalEdit: ProjectDto = {
    title: '',
    linkGithub: '',
    linkDeploy: '',
    urlImg: ''
  }

  projectEdit(id:number) {
    this.idEdit.emit(this.project.id)
  }

  setFormProject(data: any) {
    const dataEdit = {
      title: data.title,
      linkGithub: data.linkGithub,
      linkDeploy: data.linkDeploy,
      urlImg: data.urlImg
    }
    this.projectModalEdit = dataEdit
    console.log(this.projectModalEdit)
    this.dataEditProject.emit(this.projectModalEdit)
    this.showModal()
  }

  projectDelete(id: number) {
    this.idDelete.emit(this.project.id)
  }

}
