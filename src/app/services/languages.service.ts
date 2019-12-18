import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Languages } from '../models/languages';

@Injectable({
  providedIn: 'root'
})
export class LanguagesService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getLanguageById(id: number) {
    return this.http.get( this.apiUrl + 'languages/' + id);
  }

  getLanguages(params: any[]) {
    return this.http.get(this.apiUrl + 'languages');
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
