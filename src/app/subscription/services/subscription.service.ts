import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {Plan} from "../model/plan";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  basePath = "http://localhost:3000/api/v1/plans"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  // API Error Handling
  handleError(error: HttpErrorResponse) {
    if(error.error instanceof ErrorEvent){
      // Default error
      console.log(`An error occurred: ${error.error.message}`)
    }
    else {
      // Unsuccessful Response Error Code returned
      console.error(
        `Backend returned code ${error.status},
         body was ${error.error}`
      );
    }
    // Return Observable with Error Message to Client
    return throwError('Something happened with request, please try again later');
  }

  getPlans(): Observable<Plan> {
    return this.http.get<Plan>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getById(id: any): Observable<Plan> {
    return this.http.get<Plan>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
}
