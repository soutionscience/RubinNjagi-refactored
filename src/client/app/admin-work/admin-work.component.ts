import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AdminWorkDailogComponent } from '../admin-work-dailog/admin-work-dailog.component';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }


  addWork(){
    console.log("adding work")
    this.dialog.open(AdminWorkDailogComponent,{width: '750px', height: '450px', 
    data:{
      dataKey:"mine"
    }})

  }

}
