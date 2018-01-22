import { Injectable } from '@angular/core';
import {Restangular} from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import{About} from '../shared/about.model'


@Injectable()
export class AboutService {

  constructor(private restangular: Restangular) { }

  getAbout(): Observable<About[]>{
    console.log("hitting about service")
    return this.restangular.all('about').getList();
  }

  postAbout(newPost){
    this.restangular.all('about').post(newPost)
  }

  deleteAbout(id: number){
    this.restangular.one('about', id).remove();
  }
  setFeaured(id: number):Observable<About[]>{
    return this.restangular.one('about', id).put();
  }
  getFeatured(): Observable<About[]>{
    return this.restangular.all('about').getList({featured: true})

  }

}
