import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Classifications } from '../models/classifications';
import {AppGlobals} from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class ClassificationService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private appGlobals: AppGlobals) { }

  getById(id: number) {
    return this.http.get( this.apiUrl + 'classifications/' + id);
  }

  get(params: any[] = null) {
    let paramsUrl = '';
    if (params !== null) {
      paramsUrl = this.appGlobals.paramsConvert(params);
    }

    return this.http.get(this.apiUrl + 'classifications' + paramsUrl);
  }

  create(classification: Classifications) {
    return this.http.post(this.apiUrl + 'classifications', JSON.stringify(classification), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  update(classification: Classifications) {
    return this.http.put(this.apiUrl + 'classifications', JSON.stringify(classification), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
