import { Component, OnInit, Inject, Output, EventEmitter} from '@angular/core';
import { EducationService } from '../services/education.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AddEducationComponent } from '../add-education/add-education.component';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-education-details',
  templateUrl: './add-education-details.component.html',
  styleUrls: ['./add-education-details.component.css']
})
export class AddEducationDetailsComponent implements OnInit {

  @Output() notify = new EventEmitter<any>(); //notifies parent of changes in child component


  educationForm: FormGroup

  constructor(private educationService: EducationService, 
    public dialogRef: MatDialogRef<AddEducationComponent>,
  private fb: FormBuilder,
  @Inject(MAT_DIALOG_DATA) public data: any) { this.createForm()}

  ngOnInit() {
  }
  createForm(){
    this.educationForm = this.fb.group({
      school: '',
      course:'',
      desc:''
     })
    }


  onSubmit(){
    console.log("submit me")
    this.educationService.postEducation(this.educationForm.value)
    this.dialogRef.close()
  }

}
