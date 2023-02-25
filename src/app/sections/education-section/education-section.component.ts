import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/model/Education';
import { EducationDto } from 'src/model/Education';

@Component({
  selector: 'app-education-section',
  templateUrl: './education-section.component.html',
  styleUrls: ['./education-section.component.css']
})
export class EducationSectionComponent implements OnInit {

  public educations: Education[] = []

  Agregar:string = "Agregar"
  Editar: string = "Editar"
  idEdit: number = 0
  @Input() isLogged: boolean = false

  constructor(private educationService: EducationService) { }

  ngOnInit():void {
    this.getEductions();
  }

  addEducation(data:any) {
    const newEducacion: EducationDto = {
      nameEducacation: data.nameEducation,
      titleEducation: data.titleEducation,
      time: data.time,
      descriptionEducaction: data.descriptionEducation
    }
    this.educationService.addEducation(newEducacion).subscribe( data => {
      console.log("Educacion creada", data)
      this.getEductions()
    })
    this.handleModalAdd()
  }



  getEductions():void {
    this.educationService.getEducations().subscribe({
      next:(reponse: Education[]) => {
        this.educations = reponse
      },
      error:(error: HttpErrorResponse)=> {
        console.log(error)
      }
    })
  }

  setIdEdit(id:number){
    this.idEdit = id
    console.log(this.idEdit)
  }

  editEducation(data:any) {
    const educationEdit: EducationDto = {
      nameEducacation: data.nameEducation,
      titleEducation: data.titleEducation,
      time: data.time,
      descriptionEducaction: data.descriptionEducation
    }
    this.educationService.updateEducation(this.idEdit, educationEdit ).subscribe( data => {
      console.log("Educacion Actualizada", data)
      this.getEductions()
    })
    this.handleModalEdit(false)
    this.getEductions()
  }


  public deleteEducation(id: number): void {
    this.educationService.deleteEducation(id).subscribe({
      next:(response: Education[]) => {
        console.log(`response ${response}`)
        this.educations = response
        this.getEductions()
      },
      error:(error: HttpErrorResponse) => {
        this.getEductions()
      }
    })

  }

  showData(data:any) {
    console.log(data)
  }

  stateSection: boolean = false
  showSection(curretState: boolean) {
    this.stateSection = curretState
  }

  stateModalAdd: boolean = false
  public handleModalAdd() {
    this.stateModalAdd = !this.stateModalAdd
  }

  closeModal(state:any){
    this.stateModalAdd = state
  }


  stateModalEdit: boolean = false
  handleModalEdit(state:any) {
    this.stateModalEdit = state
  }

}
