import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  httpOptions: any = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
    }),
  };

  private apiUrl = 'https://localhost:7138/api';
  //private apiUrl = 'https://almondcove.in/api';
  constructor(private http: HttpClient) { }

  postData(endpoint: any, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.post(url, data);
  }

  getData(endpoint: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.get(url);
  }

}
