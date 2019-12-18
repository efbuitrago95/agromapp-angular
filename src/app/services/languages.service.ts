import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Languages } from '../models/languages';
import {AppGlobals} from '../app-globals';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private appGlobals: AppGlobals) { }

  getLanguageById(id: number) {
    return this.http.get( this.apiUrl + 'languages/' + id);
  }

  getLanguages(params: any[] = null) {
    let paramsUrl = '';
    if (params !== null) {
      paramsUrl = this.appGlobals.paramsConvert(params);
    }

    return this.http.get(this.apiUrl + 'languages' + paramsUrl);
  }

  createLanguage(language: Languages) {
    return this.http.post(this.apiUrl + 'languages', JSON.stringify(language), {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    });
  }

  updateLanguage(language: Languages) {
    return this.http.put(this.apiUrl + 'languages', JSON.stringify(language), {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    });
  }
}
