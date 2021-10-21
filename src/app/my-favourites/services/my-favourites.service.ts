
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";
import {MyFavourites} from "../model/my-favourites";

@Injectable({
  providedIn: 'root'
})
export class MyFavouritesService {
  basePath = "http://localhost:3000/api/v1/favourites"

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

  // Create Favourite
  create(item: any): Observable<MyFavourites> {
    return this.http.post<MyFavourites>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Get Favourite by Id
  getById(id: any): Observable<MyFavourites> {
    return this.http.get<MyFavourites>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Get Favourite by CarId
  getByCar(carId: any, userId: any): Observable<MyFavourites> {
    return this.http.get<MyFavourites>(`${this.basePath}?carId=${carId}&userId=${userId}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Get All Favourite
  getAll(): Observable<MyFavourites> {
    return this.http.get<MyFavourites>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Update Favourite
  update(id: any, item: any): Observable<MyFavourites> {
    return this.http.put<MyFavourites>(`${this.basePath}/${id}`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  // Delete Favourite
  delete(id: any): Observable<MyFavourites> {
    return this.http.delete<MyFavourites>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }
}
