import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AdminWorkDailogComponent } from '../admin-work-dailog/admin-work-dailog.component';
import { Work } from '../shared/work.model';
import { WorkService } from '../services/work.service';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent implements OnInit {

  work: Work[];
  selectedOne: Work
  ApiRoute: String

  constructor(private dialog: MatDialog, private workService: WorkService ) {
    this.getWork();
   }

  ngOnInit() {
  }


  addWork(){
    console.log("adding work")
    this.dialog.open(AdminWorkDailogComponent,{width: '750px', height: '450px', 
    data:{
      dataKey:"mine"
    }})

  }
  getWork(){
    this.workService.getWork()
    .subscribe(wrk => this.work = wrk)
  }
  setSelected(wrk){
    console.log("selecting work", wrk)
    this.selectedOne = wrk;
    this.ApiRoute ="work"
  }

}
