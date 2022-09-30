import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  appUrl: any = environment.appUrl;
  apiRoutes: any = environment.apiRoutes;

  constructor(private http:HttpClient) { }

  doPost(operation: string, data: any): Observable<any> {
    return this.http.post(
      this.appUrl + this.apiRoutes[operation],
      data
    ).pipe(map(
      (res: any) => res.json()
    ))
  }

  doGet(operation: string, data: any) {
    return this.http.get(
      this.appUrl + this.apiRoutes[operation] + '/' + data
    ).pipe(map(
      (res: any) => res.json()
    ))
}
}
