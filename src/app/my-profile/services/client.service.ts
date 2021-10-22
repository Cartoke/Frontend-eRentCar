import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {Client} from "../model/client";
import {catchError, retry} from "rxjs/operators";
import {Car} from "../../search-car/model/car";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  basePath = "http://localhost:3000/api/v1/clients";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) {
  }

  // API Error Handling
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred ${error.error.message}`);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    return throwError("Something happened with request, please try again later");
  }

  create(item: any): Observable<Client> {
    return this.http.post<Client>(this.basePath, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getById(id: any): Observable<Client> {
    return this.http.get<Client>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getAll(): Observable<Client> {
    return this.http.get<Client>(this.basePath, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getCarsByIdClient(id: any): Observable<Car> {
    return this.http.get<Car>(`${this.basePath}/${id}/cars`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getFavoritesByIdClient(id: any): Observable<Car> {
    return this.http.get<Car>(`${this.basePath}/${id}/favourites`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getByEmailAndPassword(email: any, password: any): Observable<Client> {
    return this.http.get<Client>(`${this.basePath}?email=${email}&password=${password}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  getByEmail(email: any): Observable<Client> {
    return this.http.get<Client>(`${this.basePath}?email=${email}`)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  update(id: any, item: any): Observable<Client> {
    return this.http.post<Client>(`${ this.basePath }/${ id }`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  partialUpdate(id: any, item: any): Observable<Client> {
    return this.http.patch<Client>(`${ this.basePath }/${ id }`, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }

  delete(id: any) {
    return this.http.delete(`${ this.basePath }/${ id }`, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      );
  }
}
