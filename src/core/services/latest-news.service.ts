import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LatestNewsService {

 private newsUrl = 'https://newsapi.org/v2/top-headlines/sources?apiKey=783b19482f8e4bb392d79388c71bbd71';
 
  constructor(private http:HttpClient) { }
 
  getLatestNews():Observable<any[]>{
    return this.http.get<any[]>(this.newsUrl).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
