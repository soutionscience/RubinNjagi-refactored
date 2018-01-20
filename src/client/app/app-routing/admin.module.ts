import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//import { AdminComponent } from '../admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminAreaComponent } from '../admin-area/admin-area.component';
import { SidebarComponent } from '../sidebar/sidebar.component';



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
    FormsModule, ReactiveFormsModule
  ],
  declarations: [AdminAreaComponent, SidebarComponent],
  exports: [ RouterModule ]
})
export class AdminModule { }
