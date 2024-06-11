import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './models';
import { Observable } from 'rxjs';

const BASE_URL = 'https://api.github.com/';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getUsers(query: string): Observable<any> {
    const url = `https://api.github.com/search/users?q=${query}&per_page=20`;
    return this.http.get(url);
  }

  getUser(username: string): Observable<any> {
    const url = `https://api.github.com/users/${username}`;
    return this.http.get(url);
  }
}
