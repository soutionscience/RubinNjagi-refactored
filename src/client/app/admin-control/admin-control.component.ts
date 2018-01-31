import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { Contact } from '../shared/contact.model';

@Component({
  selector: 'app-admin-control',
  templateUrl: './admin-control.component.html',
  styleUrls: ['./admin-control.component.css']
})
export class AdminControlComponent implements OnInit {

 messages: Contact[];
 apiRoute : String;

  constructor(private aboutService: AboutService) {this.getMessages()}


  getMessages(){
    this.apiRoute='contact'
    this.aboutService.getMessages(this.apiRoute)
    .subscribe(resp => this.messages = resp)
  }

  ngOnInit() {
  }

}
