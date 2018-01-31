import { Injectable } from '@angular/core';
import {Restangular} from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import{About} from '../shared/about.model'
import { Image } from '../shared/image.model';
import { Contact } from '../shared/contact.model';


@Injectable()
export class AboutService {

  constructor(private restangular: Restangular) { }

  getAbout(apiRoute): Observable<About[]>{
    console.log("hitting about service")
    return this.restangular.all(apiRoute).getList();
  }
  
  getMessages(apiRoute): Observable<Contact[]>{
    console.log("hitting about service")
    return this.restangular.all(apiRoute).getList();
  }



  postAbout(newPost, apiRoute){
    this.restangular.all(apiRoute).post(newPost)
  }

  deleteAbout(id: number, apiRoute){
    this.restangular.one(apiRoute, id).remove();
  }
  setFeaured(id: number, apiRoute):Observable<About[]>{
    return this.restangular.one(apiRoute, id).put();
  }
  getFeatured(): Observable<About[]>{
    return this.restangular.all('about').getList({featured: true})

  }
  postImage(id: number, imageDetail, apiRoute){
    this.restangular.one(apiRoute, id).all('images').post(imageDetail)
  }
  // get all images in about
  getImage(id: number): Observable<Image[]>{
    return this.restangular.one('about',id).all('images').getList();
  }

}
