import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  url='http://localhost:8081/';

  Login(data:any){
    return this.http.post(this.url+"login",data).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage=''
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
        errorMessage='Invalid Email or Password.'
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(errorMessage));
  }


  getAdminDataById(id:any){
    return this.http.get(this.url+"admin/"+id)
  }
}
