import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//import { AdminComponent } from '../admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAreaComponent } from '../admin-area/admin-area.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AdminAboutDetailComponent } from '../admin-about-detail/admin-about-detail.component';
import { AddImageComponent } from '../add-image/add-image.component';
import { AdminEducationModule } from './admin-education.module';
import { AdminAboutModule } from './admin-about.module';



const routes: Routes =[
  {path:'', component: AdminAreaComponent, children:[
    {path:'about', loadChildren:'./admin-about.module#AdminAboutModule'},
    {path: 'edu', loadChildren: './admin-education.module#AdminEducationModule'}
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule,
  //  AdminEducationModule, AdminAboutModule
   
  ],
  declarations: [AdminAreaComponent, SidebarComponent],
  exports: [ RouterModule]
})
export class AdminModule { }
