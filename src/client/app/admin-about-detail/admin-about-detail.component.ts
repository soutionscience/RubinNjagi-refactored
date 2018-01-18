import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { About } from '../shared/about.model';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-admin-about-detail',
  templateUrl: './admin-about-detail.component.html',
  styleUrls: ['./admin-about-detail.component.css']
})
export class AdminAboutDetailComponent implements OnInit {

  @Input()selected:About

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
  }
  deleteAbout(id){
  
    this.aboutService.deleteAbout(id);
  }
}
