import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cookie } from '../models/cookie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  // private baseUrl = 'http://localhost:8085/';
  // private baseUrl = '/CookieTracker/';
  baseUrl = environment.baseUrl;
  private url = this.baseUrl + 'api/cookies';

  constructor(private http: HttpClient) { }

  index(): Observable<Cookie[]> {
    return this.http.get<Cookie[]>(this.url + '?sorted=true').pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('CookieService.index(): Error retrieving cookie list');
      })
    );
  }

  show(cookieId: number): Observable<Cookie> {
    return this.http.get<Cookie>(`${this.url}/${cookieId}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('CookieService.show(): Error retrieving cookie ' + cookieId);
      })
    );
  }

  create(cookie: Cookie): Observable<Cookie> {
    // cookie.completed = false;
    return this.http.post<Cookie>(this.url, cookie).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('CookieService.create(): Error creating cookie');
      })
    );
  }

  update(cookie: Cookie): Observable<Cookie> {
    return this.http.put<Cookie>(`${this.url}/${cookie.id}`, cookie).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('CookieService.update(): Error updating cookie');
      })
    );
  }

  destroy(cookieId: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.url}/${cookieId}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('CookieService.destroy(): Error deleting cookie');
      })
    );
  }



}
