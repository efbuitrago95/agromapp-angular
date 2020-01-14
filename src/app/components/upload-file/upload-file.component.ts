import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  @Output() changeImage  = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  async onUploadFinished(file) {
    // console.log(file.src);
    this.changeImage.emit(file.src);
  }
}
