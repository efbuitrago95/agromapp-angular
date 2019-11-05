import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Properties } from '../models/properties';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProperties() {
    return this.http.get(this.apiUrl + 'properties');
  }

  createProperty(property: Properties) {
    return this.http.post(this.apiUrl + 'properties', JSON.stringify(property), {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    });
  }

  updateProperty(property: Properties) {
    return this.http.put(this.apiUrl + 'properties', JSON.stringify(property), {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    });
  }
}