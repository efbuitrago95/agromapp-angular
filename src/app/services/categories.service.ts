import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Categories } from '../models/categories';
import {AppGlobals} from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private appGlobals: AppGlobals) { }

  getById(id: number) {
    return this.http.get( this.apiUrl + 'categories/' + id);
  }

  get(params: any[] = null) {
    let paramsUrl = '';
    if (params !== null) {
      paramsUrl = this.appGlobals.paramsConvert(params);
    }

    return this.http.get(this.apiUrl + 'categories' + paramsUrl);
  }

  create(category: Categories) {
    return this.http.post(this.apiUrl + 'categories', JSON.stringify(category), {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    });
  }

  update(category: Categories) {
    return this.http.put(this.apiUrl + 'categories', JSON.stringify(category), {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    });
  }
}
