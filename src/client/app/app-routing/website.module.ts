import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { Routes, RouterModule} from '@angular/router';
import { BannerComponent } from '../banner/banner.component';
import { MyMenuComponent } from '../my-menu/my-menu.component';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { MatToolbarModule } from '@angular/material';
import { ContactsComponent } from '../contacts/contacts.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


const routes: Routes=[
  {path: '', component: HomeComponent, children :[
    {path: 'about', loadChildren:'./about.module#AboutModule'},
    {path: 'education', loadChildren: './education.module#EducationModule'}
  ]}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
  
  ],
  declarations: [HomeComponent, BannerComponent,MyMenuComponent, TopMenuComponent, ContactsComponent, FooterComponent]
})
export class WebsiteModule { }
