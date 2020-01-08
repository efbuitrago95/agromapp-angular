import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Roles } from '../models/roles';
import {AppGlobals} from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class RolesServices {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private appGlobals: AppGlobals) { }

  getById(id: number) {
    return this.http.get( this.apiUrl + 'languages/' + id);
  }

  get(params: any[] = null) {
    let paramsUrl = '';
    if (params !== null) {
      paramsUrl = this.appGlobals.paramsConvert(params);
    }

    return this.http.get(this.apiUrl + 'roles' + paramsUrl);
  }

  create(roles: Roles) {
    return this.http.post(this.apiUrl + 'roles', JSON.stringify(roles), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  update(roles: Roles) {
    return this.http.put(this.apiUrl + 'languages', JSON.stringify(roles), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
