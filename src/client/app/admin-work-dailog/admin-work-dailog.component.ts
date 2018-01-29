import { Component, OnInit, Inject } from '@angular/core';
import { Work } from '../shared/work.model';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AdminWorkComponent } from '../admin-work/admin-work.component';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-admin-work-dailog',
  templateUrl: './admin-work-dailog.component.html',
  styleUrls: ['./admin-work-dailog.component.css']
})
export class AdminWorkDailogComponent implements OnInit {

  work: Work
  workForm: FormGroup
  myroute: String

  constructor(private fb: FormBuilder, 
    public dialogRef: MatDialogRef<AdminWorkComponent>,
    private aboutService: AboutService,
    @Inject(MAT_DIALOG_DATA) public data: any) { this.createForm() }



  createForm(){
    this.workForm = this.fb.group({
      company: '',
      position: '',
      desc:''
    })
  }

  ngOnInit() {
  }

  addWork(){
    this.myroute = "work"
    this.aboutService.postAbout(this.workForm.value, this.myroute)
    this.dialogRef.close();
  }

}
