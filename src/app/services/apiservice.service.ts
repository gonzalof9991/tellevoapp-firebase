import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs'; 


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(public http: HttpClient) { }

  /*
  Comando para levantar servidor de la API falsa: json-server -H IP_INTERNET ./db.json
  Se establece la  base url del API a consumir
  apiURL = 'https://jsonplaceholder.typicode.com';
  10.15.64.38 */
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' :'*'
    })
  }

  // apiURL = 'http://192.168.1.18:3000'; // Gonza
  apiURL = 'https://raw.githubusercontent.com/gonzalor9991/tellevoapp-firebase/branch/db.json?token=ATJLLBUB5LH474VTFSJKJODBW5QPW'; // Moises
  getUsers(): Observable<any>{
    return this.http.get(this.apiURL).pipe(
      retry(3)
      );
  };
}
