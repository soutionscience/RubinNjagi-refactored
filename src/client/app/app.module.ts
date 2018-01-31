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
import { UploadService } from './services/upload.service';
import { RouterModule } from '@angular/router/src/router_module';


@NgModule({
  declarations: [ ],
  imports: [
    BrowserModule,
    // MatToolbarModule,
    // MatIconModule,
    // BrowserAnimationsModule,
    // MatButtonModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [AboutService, UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
