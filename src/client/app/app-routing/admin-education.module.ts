import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEducationComponent } from '../add-education/add-education.component';
import { Routes, RouterModule } from '@angular/router';
import { WorkService } from '../services/work.service';
import { EducationService } from '../services/education.service';
import { AddEducationDetailsComponent } from '../add-education-details/add-education-details.component';
import { MatDialog, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes= [
  {path: '', component: AddEducationComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [AddEducationComponent, AddEducationDetailsComponent],
  providers: [WorkService, EducationService],
  entryComponents: [AddEducationDetailsComponent]
})
export class AdminEducationModule { }
