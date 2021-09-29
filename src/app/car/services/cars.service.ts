import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Car} from "../model/car";
import {catchError, retry} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  basePath = "http://localhost:3000/api/v1/cars"

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
  create(item: any): Observable<Car> {
    return this.http.post<Car>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Get Student by Id
  getById(id: any): Observable<Car> {
    return this.http.get<Car>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Get All Students
  getAll(): Observable<Car> {
    return this.http.get<Car>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Update Student
  update(id: any, item: any): Observable<Car> {
    return this.http.post<Car>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Delete Student
  delete(id: any): Observable<Car> {
    return this.http.delete<Car>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
}
