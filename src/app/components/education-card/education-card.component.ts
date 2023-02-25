import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Education, EducationDto } from 'src/model/Education';

@Component({
  selector: 'app-education-card',
  templateUrl: './education-card.component.html',
  styleUrls: ['./education-card.component.css']
})
export class EducationCardComponent implements OnInit {

  @Input() education: Education = {
    nameEducacation: '',
    id: 0,
    descriptionEducaction: '',
    titleEducation: '',
    time: ''
  }

  title:string = "Editar"
  @Input() isLogged: boolean = false
  @Output() idDelete = new EventEmitter<number>()
  @Output() idEdit = new EventEmitter<number>()
  @Output() dataModal = new EventEmitter<boolean>()
  @Output() dataEditEducation = new EventEmitter<EducationDto>()

  constructor() { }

  ngOnInit(): void {
  }
  educationDelete(id:number) {
    this.idDelete.emit(this.education.id)
  }
  modalEdit: boolean = false
  handleModalState() {
    this.modalEdit = !this.modalEdit
  }

  closeModal(state:boolean) {
    this.modalEdit = state
  }

  educationModalEdit: EducationDto = {
    nameEducacation: '',
    descriptionEducaction: '',
    titleEducation: '',
    time: ''
  }
  setDataFormEducation(data:any) {
    const dataEdit = {
    nameEducacation: data.nameEducacation,
    descriptionEducaction: data.descriptionEducaction,
    titleEducation: data.titleEducation,
    time: data.time
  }
  this.educationModalEdit = dataEdit
  this.dataEditEducation.emit(this.educationModalEdit)
  this.handleModalState()
  }

  educationEdit() {
    this.idEdit.emit(this.education.id)
  }




}
