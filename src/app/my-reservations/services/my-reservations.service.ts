import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {MyReservations} from "../model/my-reservations";

@Injectable({
  providedIn: 'root'
})
export class MyReservationsService {
  basePath = "http://localhost:3000/api/v1/Reservations"

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
  create(item: any): Observable<MyReservations> {
    return this.http.post<MyReservations>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Get Student by Id
  getById(id: any): Observable<MyReservations> {
    return this.http.get<MyReservations>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Get All Students
  getAll(): Observable<MyReservations> {
    return this.http.get<MyReservations>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Update Student
  update(id: any, item: any): Observable<MyReservations> {
    return this.http.post<MyReservations>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Delete Student
  delete(id: any): Observable<MyReservations> {
    return this.http.delete<MyReservations>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
}
