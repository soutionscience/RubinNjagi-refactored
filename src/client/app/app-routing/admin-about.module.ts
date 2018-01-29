import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import { AdminAboutComponent } from '../admin-about/admin-about.component';
import { AdminAboutDetailComponent } from '../admin-about-detail/admin-about-detail.component';
import { MatDialogModule } from '@angular/material';
import { AdminComponent } from '../admin/admin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddAboutComponent } from '../add-about/add-about.component';
import { AddImageComponent } from '../add-image/add-image.component';
import { AdminModule } from './admin.module';
import { AddImageModule } from './add-image.module';
import { AdminWorkComponent } from '../admin-work/admin-work.component';
const routes: Routes =[
  {path:'', component: AdminAboutComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    AddImageModule
  
  ],
  declarations: [AdminAboutComponent, AdminComponent, AddAboutComponent],
  entryComponents:[AddAboutComponent]
})
export class AdminAboutModule { }
