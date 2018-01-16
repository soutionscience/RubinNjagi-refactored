import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButton, MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import{ HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {RestangularModule, Restangular} from 'ngx-restangular';
import {RestangularConfigFactory} from './shared/rest-config';
import { AboutService } from './services/about.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddImageComponent } from './add-image/add-image.component';
import { UploadService } from './services/upload.service';
import { AdminComponent } from './admin/admin.component';




@NgModule({
  declarations: [
    AddImageComponent,
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
  providers: [AboutService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
