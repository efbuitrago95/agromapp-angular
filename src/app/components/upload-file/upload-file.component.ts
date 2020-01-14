import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  @Output() changeImage  = new EventEmitter();
  constructor(private storage: AngularFireStorage) {
  }

  ngOnInit() {
  }

  async onUploadFinished(file) {
    this.changeImage.emit(file.src);
  }
}
