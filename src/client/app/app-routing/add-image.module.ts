import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAboutDetailComponent } from '../admin-about-detail/admin-about-detail.component';
import { AddImageComponent } from '../add-image/add-image.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminAboutDetailComponent, AddImageComponent],
  exports:[AddImageComponent, AdminAboutDetailComponent]
})
export class AddImageModule { }
