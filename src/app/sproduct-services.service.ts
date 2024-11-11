import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SproductServicesService {

apiUrl='https://jsonplaceholder.typicode.com/photos?_start=100&_limit=50';

constructor(private htpp:HttpClient){}

getData():Observable<any[]>{
  return this.htpp.get<any[]>(this.apiUrl);
  
}

}
