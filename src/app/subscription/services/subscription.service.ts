import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {MySubscription} from "../model/my-subscription";

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {
  basePath = "http://localhost:3000/api/v1/Subscriptions"

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

  // Create Student
  create(item: any): Observable<MySubscription> {
    return this.http.post<MySubscription>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Get Student by Id
  getById(id: any): Observable<MySubscription> {
    return this.http.get<MySubscription>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Get All Students
  getAll(): Observable<MySubscription> {
    return this.http.get<MySubscription>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Update Student
  update(id: any, item: any): Observable<MySubscription> {
    return this.http.post<MySubscription>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Delete Student
  delete(id: any): Observable<MySubscription> {
    return this.http.delete<MySubscription>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
}
