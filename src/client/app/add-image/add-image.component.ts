import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { About } from '../shared/about.model';
import {AboutService} from '../services/about.service'

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
    @Input() selected :About[];
    @Output() myNotify = new EventEmitter<any>();

  constructor (private uploadService: UploadService, private aboutService:AboutService) { }

  ngOnInit() {
  }

  @ViewChild("fileInput") fileInput;

addFile(): void {
    let fi = this.fileInput.nativeElement;
    if (fi.files && fi.files[0]) {
        let fileToUpload = fi.files[0];
        this.uploadService
            .upload(fileToUpload)
            .subscribe(res => {
                this.myNotify.emit(res)
                console.log("is this the res" , res);
            });
    }
}

// testCall(){
//     this.aboutService.getImage(this.test).subscribe(resp =>{console.log("geting images back", resp)})
// }

}
