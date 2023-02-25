import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { EducationDto } from 'src/model/Education';
import { FormControl, FormGroup  } from '@angular/forms';

@Component({
  selector: 'app-modal-education',
  templateUrl: './modal-education.component.html',
  styleUrls: ['./modal-education.component.css']
})
export class ModalEducationComponent implements OnInit {


  @Output() dataFormEducation = new EventEmitter<any>();
  @Output() closeModalEducation = new EventEmitter<any>();
  @Input() title:string = "";
  educationForm = new FormGroup( {
  nameEducation:new FormControl(''),
  descriptionEducation: new FormControl(''),
  titleEducation: new FormControl(''),
  time: new FormControl('')
  })
  constructor() { }

  ngOnInit(): void {
    this.educationForm
  }

  modalState: boolean = false
  closeModal(){
    this.modalState = false
    this.closeModalEducation.emit(this.modalState)
  }

  onSubmit() {
    this.dataFormEducation.emit(this.educationForm.value)
    this.educationForm.reset()
  }

}
