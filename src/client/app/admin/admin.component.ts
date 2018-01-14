import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder} from '@angular/forms';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    aboutForm: FormGroup;
  constructor(private fb: FormBuilder, private aboutService: AboutService) { this.createForm()}

  createForm(){

    this.aboutForm = this.fb.group({
      image: '',
      title: '',
      subtitle:'',
      description: '',
      secondTitle: '',
      secondSubTitle: '',
      secondDesc: ''

    })
  }

  ngOnInit() {
  }

  onSubmit(){

    this.aboutService.postAbout(this.aboutForm.value)
    console.log("submiting form")
    
  }

}
