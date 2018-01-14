import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButton, MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';

import{ HttpModule} from '@angular/http';



import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyMenuComponent } from './my-menu/my-menu.component';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AdminComponent } from './admin/admin.component';
import {RestangularModule, Restangular} from 'ngx-restangular';
import {RestangularConfigFactory} from './shared/rest-config';
import { AboutService } from './services/about.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    MyMenuComponent,
    BannerComponent,
    AboutComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AboutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
