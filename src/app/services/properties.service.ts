import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Properties } from '../models/properties';
import {AppGlobals} from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private appGlobals: AppGlobals) { }

  getById(id: number) {
    return this.http.get( this.apiUrl + 'properties/' + id);
  }

  get(params: any[] = null) {
    let paramsUrl = '';
    if (params !== null) {
      paramsUrl = this.appGlobals.paramsConvert(params);
    }

    return this.http.get(this.apiUrl + 'properties' + paramsUrl);
  }

  create(property: Properties) {
    return this.http.post(this.apiUrl + 'properties', JSON.stringify(property), {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    });
  }

  update(property: Properties) {
    return this.http.put(this.apiUrl + 'properties', JSON.stringify(property), {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    });
  }
}
