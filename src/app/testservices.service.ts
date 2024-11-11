import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestservicesService {
  apiurl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}


  private _refreshrequired = new Subject<void>();

  get Refershrequired(){
    return this._refreshrequired;
  }

  getApi(): Observable<any[]> {
    return this.http.get<any[]>(this.apiurl);
  }

  getCode(code: any): Observable<any> {
    return this.http.get<any>(`${this.apiurl}/${code}`);
  }

  save(inputData: any): Observable<any> {
    return this.http.post(this.apiurl, inputData).pipe(
      tap(()=>{
        this._refreshrequired.next();
      })
    );
  }
}
