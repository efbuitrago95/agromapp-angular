import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Countries } from '../models/countries';
import {AppGlobals} from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private appGlobals: AppGlobals) { }

  getById(id: number) {
    return this.http.get( this.apiUrl + 'countries/' + id);
  }

  get(params: any[] = null) {
    let paramsUrl = '';
    if (params !== null) {
      paramsUrl = this.appGlobals.paramsConvert(params);
    }

    return this.http.get(this.apiUrl + 'countries' + paramsUrl);
  }

  create(country: Countries) {
    return this.http.post(this.apiUrl + 'countries', JSON.stringify(country), {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    });
  }

  update(country: Countries) {
    return this.http.put(this.apiUrl + 'countries', JSON.stringify(country), {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    });
  }
}
