import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CropsItems } from '../models/cropItems';
import {AppGlobals} from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class CropItemsService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private appGlobals: AppGlobals) { }

  getById(id: number) {
    return this.http.get( this.apiUrl + 'crop_items/' + id);
  }

  get(params: any[] = null) {
    let paramsUrl = '';
    if (params !== null) {
      paramsUrl = this.appGlobals.paramsConvert(params);
    }

    return this.http.get(this.apiUrl + 'crops' + paramsUrl);
  }

  create(cropsItems: CropsItems) {
    return this.http.post(this.apiUrl + 'crops', JSON.stringify(cropsItems), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  update(cropsItems: CropsItems) {
    return this.http.put(this.apiUrl + 'crops', JSON.stringify(cropsItems), {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
