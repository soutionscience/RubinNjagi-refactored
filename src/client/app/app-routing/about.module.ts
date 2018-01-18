import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';
import {AddImageComponent}from '../add-image/add-image.component';


const routes : Routes =[
  {path: '', component: AboutComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AboutComponent, AddImageComponent]
})
export class AboutModule { }
