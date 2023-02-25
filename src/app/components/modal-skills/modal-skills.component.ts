import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-modal-skills',
  templateUrl: './modal-skills.component.html',
  styleUrls: ['./modal-skills.component.css']
})
export class ModalSkillsComponent implements OnInit {

  logos = [
    {name: 'fa-brands fa-css3-alt', logo: 'CSS'},
    {name: 'fa-brands fa-html5', logo: 'HTML'},
    {name: 'fa-brands fa-js-square', logo:'JavaScript'},
    {name: 'fa-brands fa-angular', logo: 'Agular'},
    {name: 'fa-brands fa-react', logo: 'React'},
    {name: 'fa-brands fa-node-js', logo: 'Node'},
    {name: 'fa-brands fa-java', logo: 'Java'},
    {name: 'fa-solid fa-database', logo: 'MySQL'},
    {name: 'fa-brands fa-bootstrap', logo: 'Bootstrap'}

  ]


  @Output() dataSkillsForm = new EventEmitter<any>();
  @Input() title: string = ''
  skillForm = new FormGroup({
    nameSkill: new FormControl(''),
    logoSkill: new FormControl(this.logos[3]),
    porSkill: new FormControl(0),
  })

  constructor() {
    this.skillForm
  }
  ngOnInit(): void {
  }
  onSubmit() {
    this.dataSkillsForm.emit(this.skillForm.value)
    this.skillForm.reset()
  }


}
