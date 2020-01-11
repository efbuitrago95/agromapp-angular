import {Component, OnInit} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor(private storage: AngularFireStorage) {
  }

  ngOnInit() {
  }

  async onUploadFinished(file) {
    console.log(file.src);
    const id = Math.random().toString(36).substring(2);
    try {
      const ref = firebase.storage().ref(`flags/${id}`);
      await new Promise((resolve, reject) => {
        ref.putString(file.src, 'data_url').then(() => {
          // ref.getDownloadURL().then((url) => {
          //   console.log('image 1: ', url);
          //   resolve('OK');
          // }).catch((error) => {
          //   console.log(error);
          //   reject(error);
          // });
        });
      });
    } catch (e) {
      console.log(e);
    }

    console.log(id);
  }
}
