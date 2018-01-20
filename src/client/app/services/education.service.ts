import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular/dist/esm/src/ngx-restangular';
import { Observable } from 'rxjs/Observable';
import { Education} from '../shared/education.model'

@Injectable()
export class EducationService {

  constructor(private restangular: Restangular) { }

  getEducation(): Observable<Education[]>{
    console.log("getting education")
    return this.restangular.all('education').getList();
  }

  postEducation(newEducation){
    this.restangular.all('education').post(newEducation)
  }

  deleteEducation(id: number){
    this.restangular.one(id).remove();
  }
}
