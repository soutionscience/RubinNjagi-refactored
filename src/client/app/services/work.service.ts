import { Injectable } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { Observable } from 'rxjs/Observable';
import { Work } from '../shared/work.model';

@Injectable()
export class WorkService {

  constructor(private restangular : Restangular) { }

  getWork():Observable<Work[]>{

    return this.restangular.all('work').getList();

  }

}
