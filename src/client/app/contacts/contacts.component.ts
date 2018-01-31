import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from '../shared/contact.model';
import { FormGroup } from '@angular/forms';
import { AboutService } from '../services/about.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
   contact: Contact;
   contactForm: FormGroup;
   contactRoute: string;
  constructor(private fb: FormBuilder, private aboutService: AboutService) { this.createForm()}

  ngOnInit() {
  }

  createForm(){
    this.contactForm =  this.fb.group({
      firstname: ['',[Validators.required]],
      secondname:['',[Validators.required]],
      email:['',[Validators.required]],
      message:['',[Validators.required]]
    })
  }

  onSubmit(){
    console.log("submit")
    this.contactRoute ="contact";
 this.aboutService.postAbout(this.contactForm.value, this.contactRoute )
 
  }

}
