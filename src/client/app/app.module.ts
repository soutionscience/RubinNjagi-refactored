import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButton, MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyMenuComponent } from './my-menu/my-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    MyMenuComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
