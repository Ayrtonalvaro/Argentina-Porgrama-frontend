import { Component, OnInit,Input } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Skill, SkillDto } from 'src/model/Skill';
import { SkillService } from 'src/app/services/skill.service';
@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.css']
})
export class SkillSectionComponent implements OnInit {

  public skills: Skill[] = []
  @Input() isLogged: boolean = false

  ngOnInit(): void {
    this.getSkills();
  }

  constructor(private skillService: SkillService) { }

  getSkills(): void {
    this.skillService.getSkills().subscribe({
      next:(response: Skill[]) => {
        this.skills = response
      },
      error:(error: HttpErrorResponse) => {
        console.log(error)
      }
    })
  }

  addSkill(data:any){
    const newSkill: SkillDto = {
      nameSkill: data.nameSkill,
      logoSkill: data.logoSkill,
      porSkill: data.porSkill
    }
    this.skillService.addSKill(newSkill).subscribe( data => {
      console.log("Skill creada", data)
      this.getSkills()
    })
    this.handleModal()
  }

  idEdit: number = 0
  setIdEdit(id:number){
    this.idEdit = id
  }

  updateSkill(data:any) {
    const updateSkill: SkillDto = {
      nameSkill: data.nameSkill,
      logoSkill: data.logoSkill,
      porSkill: data.porSkill
    }
    this.skillService.updateSkill(updateSkill, this.idEdit).subscribe( data => {
      console.log("Skill actualizada", data)
      this.getSkills()
    })
    this.handleModal()
  }

  deleteSkill(id: number): void {
    this.skillService.deleteSkill(id).subscribe({
      next:(response: Skill[]) => {
        this.skills = response
        this.getSkills()
      },
      error:(error: HttpErrorResponse) => {
        console.log(error)
      }
    })
    this.getSkills()
  }

  showId(id:number) {
    console.log(id)
  }

  stateModal: boolean = true
  handleModal() {
    this.stateModal = !this.stateModal
  }

  state: boolean = false
  showSection(curretState: boolean) {
    this.state = curretState
  }
}
