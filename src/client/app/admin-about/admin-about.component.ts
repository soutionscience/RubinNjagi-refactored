import { Component, OnInit } from '@angular/core';
import { AboutService } from '../services/about.service';
import { About } from '../shared/about.model';
import { MatDialog } from '@angular/material';
import { AddAboutComponent } from '../add-about/add-about.component';

@Component({
  selector: 'app-admin-about',
  templateUrl: './admin-about.component.html',
  styleUrls: ['./admin-about.component.css']
})
export class AdminAboutComponent implements OnInit {

  abouts: About[];
  selectedOne: About;
  ApiRoute: String;

  constructor(private aboutService: AboutService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getAbout();
  }

  getAbout(){
    this.ApiRoute ='about'
    this.aboutService.getAbout(this.ApiRoute).subscribe(resp=> this.abouts = resp)
  }
  onSelect(about){
    this.selectedOne = about
    this.ApiRoute ="about"
  
  }
  addAbout(){
 
    this.dialog.open(AddAboutComponent, {width: '700px' , height: '450px' })
  }
  onNotify(test){
 
    this.getAbout();
  }
}
