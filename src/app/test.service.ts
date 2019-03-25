import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employees';
import { throwError as ObservableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/Operators';





@Injectable({
  providedIn: 'root'
})
export class TestService {

  private _url: string ="/assets/data/emplyees.json"
 
  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
   return this.http.get<IEmployee[]>(this._url).pipe(
     catchError(this.errorHandler));    
  }
  errorHandler(error: HttpErrorResponse){
    return ObservableThrowError(error.message || "Server Error")
  }
}
