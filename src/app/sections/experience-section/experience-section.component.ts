import { Component, OnInit, Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ExperienceService } from 'src/app/services/experience.service';
import { Experience, ExperienceDto } from 'src/model/Experience';
@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.component.html',
  styleUrls: ['./experience-section.component.css']
})
export class ExperienceSectionComponent implements OnInit {

  public experiences: Experience[] = []
  stateModal: boolean = true
  idEdit: number = 0
  Agregar:string = "Agregar"
  @Input() isLogged: boolean = false

  constructor(private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.getExperiences();
  }

  getExperiences(): void {
    this.experienceService.getExperiences().subscribe({
      next:(response: Experience[]) => {
        this.experiences = response
      },
      error:(error: HttpErrorResponse) => {
        console.log(error)
      }
    })
  }

  addExperience(data:any){
    const newExperience: ExperienceDto = {
      nameExperience: data.nameExperience,
      jobTitle: data.jobTitle,
      time: data.time,
      descriptionExperience: data.descriptionExperience
    }
    this.experienceService.addExperience(newExperience).subscribe(data => {
      console.log("Experience creada", data)
      this.getExperiences()
    })
    this.handleModal()
  }

  stateModalEdit: boolean = false
  handleModalEdit(state:any) {
    this.stateModalEdit = state
  }

  setIdEdit(id:number){
    this.idEdit = id
  }

  editEducation(data:any) {
    const experienceEdit: ExperienceDto = {
      nameExperience: data.nameExperience,
      jobTitle: data.jobTitle,
      time: data.time,
      descriptionExperience: data.descriptionExperience
    }
    this.experienceService.updateExperience(this.idEdit,experienceEdit ).subscribe( data => {
      console.log("Educacion Actualizada", data)
      this.getExperiences()
    },error =>{
      console.log(error)
    })
    this.handleModalEdit(false)
  }

   deleteExperience(id: number): void {
    this.experienceService.deleteExperience(id).subscribe({
      next:(response: Experience[]) => {
        this.experiences = response
        this.getExperiences()
      },
      error:(error: HttpErrorResponse) => {
        console.log(error)
      }
    })
    this.getExperiences()
  }

  handleModal() {
    this.stateModal = !this.stateModal
  }

  receiveDataForm(data: any) {
    console.log("data:" + data )
  }

  state: boolean = false
  showSection(curretState: boolean) {
    this.state = curretState
    console.log(this.state)
  }

  closeModal(state:any){
    this.stateModal = !state
  }

}
