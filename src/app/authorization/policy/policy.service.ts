import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPolicy } from './policyModel';
import { catchError, Observable,  throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private policyUrl = 'api/policy/policy.json';

  constructor(private http:HttpClient) { }

  getTermsPolicy():Observable<IPolicy[]>{
    return this.http.get<IPolicy[]>(this.policyUrl).pipe(
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
