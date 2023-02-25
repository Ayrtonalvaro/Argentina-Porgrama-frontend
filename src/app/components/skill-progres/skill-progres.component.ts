import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skill, SkillDto } from 'src/model/Skill';

@Component({
  selector: 'app-skill-progres',
  templateUrl: './skill-progres.component.html',
  styleUrls: ['./skill-progres.component.css']
})
export class SkillProgresComponent implements OnInit {


  constructor() { }

  @Output() deleteId = new EventEmitter<number>();
  @Output() idEdit = new EventEmitter<number>()
  @Output() newUpdateSkill = new EventEmitter<SkillDto>();
  @Input() isLogged: boolean = false
  @Input() skill: Skill = {
    id:0,
    nameSkill: '',
    logoSkill: '',
    porSkill: 0
  }
  nameSkills:string = 'HTML'
  skillProgress:number = 80

  ngOnInit(): void {
  }

  experienceSkill() {
    this.idEdit.emit(this.skill.id)
  }

  updateSkill(skillUpdate:SkillDto) {
    this.experienceSkill()
    this.newUpdateSkill.emit(skillUpdate)

  }



  deleteSkill(id:number) {
    this.deleteId.emit(id)
  }

  modalEdit: boolean = false
  handleModalState() {
    this.modalEdit = !this.modalEdit

  }

  closeModal(state:boolean) {
    this.modalEdit = state
  }

}
