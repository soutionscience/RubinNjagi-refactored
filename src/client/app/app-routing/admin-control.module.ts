import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminControlComponent } from '../admin-control/admin-control.component';
import { Routes, RouterModule} from '@angular/router';


const routes: Routes =[

{  path:'', component: AdminControlComponent}

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminControlComponent]
})
export class AdminControlModule { }
