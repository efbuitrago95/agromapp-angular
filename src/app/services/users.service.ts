import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../models/users';
import {AppGlobals} from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private appGlobals: AppGlobals) { }

  getById(id: number) {
    return this.http.get( this.apiUrl + 'users/' + id);
  }

  get(params: any[] = null) {
    let paramsUrl = '';
    if (params !== null) {
      paramsUrl = this.appGlobals.paramsConvert(params);
    }

    return this.http.get(this.apiUrl + 'users' + paramsUrl);
  }

  create(category: Users) {
    return this.http.post(this.apiUrl + 'users', JSON.stringify(category), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  update(category: Users) {
    return this.http.put(this.apiUrl + 'users', JSON.stringify(category), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
