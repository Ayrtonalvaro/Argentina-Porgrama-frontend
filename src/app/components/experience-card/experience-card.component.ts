import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Experience, ExperienceDto } from 'src/model/Experience';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.css']
})
export class ExperienceCardComponent implements OnInit {
  title:string = "Editar"
  @Input() experience: Experience = {
    id: 0,
    nameExperience: '',
    jobTitle: '',
    descriptionExperience: '',
    time: ''
  }
  @Input() isLogged: boolean = false
  @Output() idDelete = new EventEmitter<number>();
  @Output() idEdit = new EventEmitter<number>()
  @Output() dataEditExperience = new EventEmitter<ExperienceDto>()

  constructor() { }

  ngOnInit(): void {
  }

  experienceDelete(id:number) {
    this.idDelete.emit(this.experience.id)
  }

  modalEdit: boolean = false
  handleModalState() {
    this.modalEdit = !this.modalEdit
    this.experienceEdit()
  }

  closeModal(state:boolean) {
    this.modalEdit = state
  }

  experienceModalEdit: ExperienceDto = {
    nameExperience: '',
    descriptionExperience: '',
    jobTitle: '',
    time: ''
  }

  experienceEdit() {
    this.idEdit.emit(this.experience.id)
  }

  mostraInfo(data:any) {
    console.log(data)
  }

  setDataFormExperience(data:any) {
    const dataEdit = {
    nameExperience: data.nameExperience,
    descriptionExperience: data.descriptionExperience,
    jobTitle: data.jobTitle,
    time: data.time
  }
  this.experienceModalEdit = dataEdit
  this.dataEditExperience.emit(this.experienceModalEdit)
  this.handleModalState()
  }
}
