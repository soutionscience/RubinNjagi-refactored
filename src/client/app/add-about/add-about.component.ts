import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AboutService } from '../services/about.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-about',
  templateUrl: './add-about.component.html',
  styleUrls: ['./add-about.component.css']
})
export class AddAboutComponent implements OnInit {
  myRoute: String
  aboutForm: FormGroup;
  constructor( private aboutService: AboutService,  
    public dialogRef: MatDialogRef<AddAboutComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any ) { this.createForm()}

  
    createForm(){

      this.aboutForm = this.fb.group({
        image: '',
        title: '',
        subtitle:'',
        description: '',
        secondTitle: '',
        secondSubTitle: '',
        secondDesc: ''
  
      })
    }
  
  
    ngOnInit() {
  }

  
  onSubmit(){
    this.myRoute ='about'
    this.aboutService.postAbout(this.aboutForm.value, this.myRoute)
    console.log("submiting form")
    this.dialogRef.close()
    
  }

}
