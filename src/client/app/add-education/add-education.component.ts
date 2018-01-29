import { Component, OnInit } from '@angular/core';
import { EducationService } from '../services/education.service';
import { Education } from '../shared/education.model';
import { MatDialog } from '@angular/material';
import { AddEducationDetailsComponent } from '../add-education-details/add-education-details.component';
import { AdminAboutDetailComponent } from '../admin-about-detail/admin-about-detail.component';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
  
})
export class AddEducationComponent implements OnInit {
  ApiRoute: String;
  education: Education[]
  selectedOne : Education
  constructor(private educationService: EducationService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getEducation();
  }
  getEducation(){

    this.educationService.getEducation()
    .subscribe(edd=> this.education = edd)
  }

  addEducation(){
    console.log("add new education")
    this.dialog.open(AddEducationDetailsComponent, {width: '700px' , height: '450px' })
  }

  setSelected(ed){

  this.selectedOne = ed;
  this.ApiRoute ="education"

  }
  onNotify(test){
 
    this.getEducation();
  }

}
