import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiBaseUrl: any = environment.apiUrl;
  apiRoutes: any = environment.apiRoutes;

  constructor(private http:HttpClient) { }

  doPost(operation: string, data: any): Observable<any> {
    return this.http.post(
      this.apiBaseUrl + this.apiRoutes[operation],
      data
    ).pipe(map(
      (res: any) => res.json()
    ))
  }

  doGet(operation: string, data: any) {
    return this.http.get(
      this.apiBaseUrl + this.apiRoutes[operation] + '/' + data
    ).pipe(map(
      (res: any) => res.json()
    ))
}

getNotesData(){
  return this.http.get('http://localhost:8090/api/getNotes');
}
addNotesData(){
  return this.http.get('http://localhost:8090/api/saveNotes');
  // this.getNotesData();
}
}
