import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import{ About} from '../shared/about.model';
import 'rxjs/add/operator/map'
import { AboutService } from '../services/about.service';
import{ trigger, state, style, animate, transition} from '@angular/animations'


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations:[
    trigger('visibility', [state('shown', style({
      transform: 'scale(1.0)',
      opacity: 1
    })), state('hidden', style({
      transform: 'scale(0.5)',
      opacity: 0
    })), transition('*=>*', animate('5s ease-in-out'))])
  ]
})
export class AboutComponent implements OnInit {
  apiRoute: String;
  abouts: About[];
  visibility = 'hidden'


  constructor(public aboutService: AboutService ) { }




  ngOnInit() {
    // this.http.get('/api/about')
    // .map((res: Response)=> res.json())
    // .subscribe(data=> {this.abouts = data; console.log(this.abouts)})
    this.getAbout()
  }
  getAbout(){
    this.apiRoute ='about'
    this.aboutService.getFeatured().subscribe(story => { console.log("what is in " + story) ;this.abouts = story; this.visibility ="shown"})
  }

}
