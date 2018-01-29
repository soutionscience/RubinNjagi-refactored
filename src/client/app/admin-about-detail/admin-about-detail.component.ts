import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Input } from '@angular/core';
import { About } from '../shared/about.model';
import { AboutService } from '../services/about.service';
import { Image } from '../shared/image.model';

@Component({
  selector: 'app-admin-about-detail',
  templateUrl: './admin-about-detail.component.html',
  styleUrls: ['./admin-about-detail.component.css']
})
export class AdminAboutDetailComponent implements OnInit {  

  
  
  @Input()selected:About[]; 
  @Input()route: String
  @Output() notify = new EventEmitter<any>(); //notify parent component to changes in child component 
  image: Image;
  test: any;

  constructor(private aboutService: AboutService) { }

  ngOnInit() {
  }
  deleteAbout(id, route){
  
    this.aboutService.deleteAbout(id, route);
  }
  setFeatured(id, route){
  console.log("hitting featured")
  this.aboutService.setFeaured(id, route).subscribe(resp => this.selected = resp)
  this.notify.emit();
  }

  imageNotify(data){
    //console.log("what is in data", data.json());
    this.image = data.json();

    //this.addImage()
  //   this.test = '5a65aba23fd77a1dec5abbc5';
  //  this.aboutService.getImage(this.test).subscribe(resp =>{this.image = resp; console.log("geting images back", resp)})
  }
  addImage(id, packet, route){
    //console.log("what is ", packet)
    var location = "/uploads/" + packet
    this.image.location = location;
    this.aboutService.postImage(id, this.image, route);
    this.notify.emit();
  }
}
