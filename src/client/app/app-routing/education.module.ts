import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from '../education/education.component';
import { EducationService } from '../services/education.service';
import { WorkService } from '../services/work.service';

const routes: Routes =[
  {path:'', component:EducationComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EducationComponent],
  providers: [EducationService, WorkService]
})
export class EducationModule { }
