import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import{ About} from '../shared/about.model';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  abouts: About[];

  constructor(public http: Http) { }

  ngOnInit() {
    this.http.get('/api')
    .map((res: Response)=> res.json())
    .subscribe(data=> {this.abouts = data; console.log(this.abouts)})
  }

}
