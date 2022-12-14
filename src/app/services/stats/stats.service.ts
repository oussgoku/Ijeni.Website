import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(private http: HttpClient) { }
  url = environment.apiUrl
  public getStats() {
    return this.http.get(`${this.url}/api/Statistics/GlobalStat`);
  }
}
