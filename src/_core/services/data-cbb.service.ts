import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { environment } from '../../environments/environment';
import {MaUser} from '../../models/ma-user'
let urlAPI = ``;

@Injectable({
  providedIn: 'root'
})
export class DataCbbService {

  constructor(private http: HttpClient) {
    urlAPI = environment.urlApi;
  }

  get(uri: string): Observable<any> {
    return this.http.get(urlAPI + '/' + uri).pipe(      //pipe: chua gia tri tra ve
      tap(                                            
        () => { },
        catchError(err => {
          return this.handleError(err);
        })
      )
    );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
 }
}
