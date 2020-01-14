import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Crops } from '../models/crops';
import {AppGlobals} from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class CropsService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private appGlobals: AppGlobals) { }

  getById(id: number) {
    return this.http.get( this.apiUrl + 'crops/' + id);
  }

  get(params: any[] = null) {
    let paramsUrl = '';
    if (params !== null) {
      paramsUrl = this.appGlobals.paramsConvert(params);
    }

    return this.http.get(this.apiUrl + 'crops' + paramsUrl);
  }

  create(category: Crops) {
    return this.http.post(this.apiUrl + 'crops', JSON.stringify(category), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  update(category: Crops) {
    return this.http.put(this.apiUrl + 'crops', JSON.stringify(category), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
