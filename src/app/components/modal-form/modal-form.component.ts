import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.css']
})
export class ModalFormComponent implements OnInit {

  @Output() dataFormProject = new EventEmitter<any>();
  @Output() closeModalProject = new EventEmitter<any>();
  @Input() title: string = '';

  projectForm = new FormGroup( {
  title: new FormControl(''),
  linkGithub:new FormControl(''),
  linkDeploy: new FormControl(''),
  urlImg: new FormControl(''),
  })
  constructor() { }
  ngOnInit(): void {
  }

  onSubmit() {
    this.dataFormProject.emit(this.projectForm.value)
    this.projectForm.reset()
  }

  modalState: boolean = true
  closeModal(){
    this.closeModalProject.emit(this.modalState)
  }




}
