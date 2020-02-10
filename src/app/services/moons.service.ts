import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Moons } from '../models/moons';
import {AppGlobals} from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class MoonsService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private appGlobals: AppGlobals) { }

  getById(id: number) {
    return this.http.get( this.apiUrl + 'moons/' + id);
  }

  get(params: any[] = null) {
    let paramsUrl = '';
    if (params !== null) {
      paramsUrl = this.appGlobals.paramsConvert(params);
    }

    return this.http.get(this.apiUrl + 'moons' + paramsUrl);
  }

  create(moon: Moons) {
    return this.http.post(this.apiUrl + 'moons', JSON.stringify(moon), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  update(moon: Moons) {
    return this.http.put(this.apiUrl + 'moons', JSON.stringify(moon), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
