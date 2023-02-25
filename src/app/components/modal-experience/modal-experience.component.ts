import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-modal-experience',
  templateUrl: './modal-experience.component.html',
  styleUrls: ['./modal-experience.component.css']
})
export class ModalExperienceComponent implements OnInit {

  @Input() title:string = "";
  @Output() dataExperienceForm = new EventEmitter<any>();
  @Output() closeModalExperience = new EventEmitter<any>();
  experienceForm = new FormGroup({
    nameExperience: new FormControl(''),
    descriptionExperience: new FormControl(''),
    jobTitle: new FormControl(''),
    time: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
    this.experienceForm
  }

  onSubmit() {
    this.dataExperienceForm.emit(this.experienceForm.value)
    this.experienceForm.reset()
  }

  modalState: boolean = false
  closeModal(){
    this.closeModalExperience.emit(this.modalState)
  }

}
