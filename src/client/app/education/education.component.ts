import { Component, OnInit } from '@angular/core';
import { Education } from '../shared/education.model';
import { EducationService } from '../services/education.service';
import { Work } from '../shared/work.model';
import { WorkService } from '../services/work.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: Education[];
  work: Work[];

  constructor(private educationService: EducationService, private workService: WorkService) { }

  ngOnInit() {
    this.getEducation();
    this.getWork();
  }

  getEducation(){
    return this.educationService.getEducation()
    .subscribe(edu=> this.education = edu)
  }

  getWork(){
    return this.workService.getWork()
    .subscribe(wrk => this.work = wrk)
  }

}
