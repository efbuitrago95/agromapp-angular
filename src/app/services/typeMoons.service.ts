import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TypeMoons } from '../models/typeMoons';
import {AppGlobals} from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class TypeMoonsService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private appGlobals: AppGlobals) { }

  getById(id: number) {
    return this.http.get( this.apiUrl + 'type_moons/' + id);
  }

  get(params: any[] = null) {
    let paramsUrl = '';
    if (params !== null) {
      paramsUrl = this.appGlobals.paramsConvert(params);
    }

    return this.http.get(this.apiUrl + 'type_moons' + paramsUrl);
  }

  create(typeMoons: TypeMoons) {
    return this.http.post(this.apiUrl + 'type_moons', JSON.stringify(typeMoons), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  update(typeMoons: TypeMoons) {
    return this.http.put(this.apiUrl + 'type_moons', JSON.stringify(typeMoons), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
