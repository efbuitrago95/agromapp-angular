import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClassificationItems } from '../models/classificationItems';
import {AppGlobals} from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class ClassificationItemsService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private appGlobals: AppGlobals) { }

  getById(id: number) {
    return this.http.get( this.apiUrl + 'classification_items/' + id);
  }

  get(params: any[] = null) {
    let paramsUrl = '';
    if (params !== null) {
      paramsUrl = this.appGlobals.paramsConvert(params);
    }

    return this.http.get(this.apiUrl + 'classification_items' + paramsUrl);
  }

  create(classificationItems: ClassificationItems) {
    return this.http.post(this.apiUrl + 'classification_items', JSON.stringify(classificationItems), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  update(classificationItems: ClassificationItems) {
    return this.http.put(this.apiUrl + 'classification_items', JSON.stringify(classificationItems), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
