import { Component, OnInit, ViewChild } from '@angular/core';
import { UploadService } from '../services/upload.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

  constructor(private uploadService: UploadService) { }

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
                console.log(res);
            });
    }
}

}
