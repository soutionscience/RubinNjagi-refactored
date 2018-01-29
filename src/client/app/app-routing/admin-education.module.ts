import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEducationComponent } from '../add-education/add-education.component';
import { Routes, RouterModule } from '@angular/router';
import { WorkService } from '../services/work.service';
import { EducationService } from '../services/education.service';
import { AddEducationDetailsComponent } from '../add-education-details/add-education-details.component';
import { MatDialog, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAboutDetailComponent } from '../admin-about-detail/admin-about-detail.component';
import { AddImageComponent } from '../add-image/add-image.component';
import { AdminModule } from './admin.module';
import { AddImageModule } from './add-image.module';
import { AdminWorkComponent } from '../admin-work/admin-work.component';
import { AdminWorkDailogComponent } from '../admin-work-dailog/admin-work-dailog.component';


const routes: Routes= [
  {path: '', component: AddEducationComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    AddImageModule
  ],
  declarations: [AddEducationComponent, AddEducationDetailsComponent, AdminWorkComponent, AdminWorkDailogComponent ],
  providers: [WorkService, EducationService],
  entryComponents: [AddEducationDetailsComponent, AdminWorkDailogComponent]
})
export class AdminEducationModule { }
