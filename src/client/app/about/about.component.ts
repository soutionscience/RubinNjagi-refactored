import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import{ About} from '../shared/about.model';
import 'rxjs/add/operator/map'
import { AboutService } from '../services/about.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  abouts: About[];


  constructor(public aboutService: AboutService ) { }




  ngOnInit() {
    // this.http.get('/api/about')
    // .map((res: Response)=> res.json())
    // .subscribe(data=> {this.abouts = data; console.log(this.abouts)})
    this.getAbout()
  }
  getAbout(){
    this.aboutService.getFeatured().subscribe(story => { console.log("what is in " + story) ;this.abouts = story})
  }
  on
}
