import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { Routes, RouterModule} from '@angular/router';
import { BannerComponent } from '../banner/banner.component';
import { MyMenuComponent } from '../my-menu/my-menu.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { MatToolbarModule } from '@angular/material';


const routes: Routes=[
  {path: '', component: HomeComponent, children :[
    {path: 'about', loadChildren:'./about.module#AboutModule'}
  ]}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule
  
  ],
  declarations: [HomeComponent, BannerComponent,MyMenuComponent, TopMenuComponent]
})
export class WebsiteModule { }
