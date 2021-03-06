import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PropertiesItems } from '../models/propertiesItems';
import {AppGlobals} from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class PropertiesitemsService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private appGlobals: AppGlobals) { }

  getById(id: number) {
    return this.http.get( this.apiUrl + 'items/' + id);
  }

  get(params: any[] = null) {
    let paramsUrl = '';
    if (params !== null) {
      paramsUrl = this.appGlobals.paramsConvert(params);
    }

    return this.http.get(this.apiUrl + 'items' + paramsUrl);
  }

  create(Property: PropertiesItems) {
    return this.http.post(this.apiUrl + 'items', JSON.stringify(Property), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  update(Property: PropertiesItems) {
    return this.http.put(this.apiUrl + 'items', JSON.stringify(Property), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
