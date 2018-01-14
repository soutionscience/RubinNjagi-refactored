import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    aboutForm: FormGroup;
  constructor(private fb: FormBuilder) { this.createForm()}

  createForm(){

    this.aboutForm = this.fb.group({
      image: '',
      title: '',
      subtitle:'',
      description: '',
      secondtitle: '',
      secondsubtitle: '',
      seconddescription: ''

    })
  }

  ngOnInit() {
  }

}
